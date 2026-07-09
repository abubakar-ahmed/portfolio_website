/**
 * Zero-dependency full-page screenshot via Chrome DevTools Protocol.
 * Keeps the viewport at a normal size (so svh/vh units behave) and uses
 * captureBeyondViewport to grab the whole scrollable page.
 *
 * Usage: node tools/screenshot.mjs <url> <out.png> [width] [height] [--viewport-only]
 */
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const [url, out, widthArg, heightArg] = process.argv.slice(2);
const viewportOnly = process.argv.includes("--viewport-only");
if (!url || !out) {
  console.error("Usage: node tools/screenshot.mjs <url> <out.png> [width] [height] [--viewport-only]");
  process.exit(1);
}
const width = Number(widthArg) || 1440;
const height = Number(heightArg) || 900;

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;
const profile = `${process.env.TEMP}\\claude\\cdp-profile`;

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--no-first-run",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`,
  `--window-size=${width},${height}`,
  "about:blank",
]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  // Wait for the DevTools endpoint
  let version = null;
  for (let i = 0; i < 50 && !version; i++) {
    try {
      version = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json();
    } catch {
      await sleep(200);
    }
  }
  if (!version) throw new Error("Chrome DevTools endpoint never came up");

  // Open a tab at the target URL
  const tab = await (
    await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: "PUT" })
  ).json();

  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let msgId = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(m.error.message)) : resolve(m.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++msgId;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send("Page.enable");
  await send("Runtime.enable");

  // Wait for load + web fonts, then a short settle for paints
  await send("Runtime.evaluate", {
    expression:
      "new Promise(async (done) => { if (document.readyState !== 'complete') await new Promise(r => addEventListener('load', r, { once: true })); await document.fonts.ready; done(); })",
    awaitPromise: true,
  });
  await sleep(1200);

  const { data } = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: !viewportOnly,
  });
  writeFileSync(out, Buffer.from(data, "base64"));
  console.log(`written ${out}`);
} finally {
  chrome.kill();
}
