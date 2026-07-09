import { useEffect } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { CheckerStrip } from "./components/decor";

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        // Single continuous page background — must not restart per section
        background: "linear-gradient(192.4deg, #191D1A 22.22%, #01160C 68.35%, #1D5535 126.75%)",
      }}
    >
      <Hero />
      <main>
        <Experience />
        <section className="mx-auto grid w-full max-w-7xl gap-20 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-14">
          <Projects />
          <Skills />
        </section>
      </main>
      <CheckerStrip />
    </div>
  );
}
