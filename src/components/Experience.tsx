import { experience } from "../data/portfolio";

export function Experience() {
  return (
    <section className="px-8 py-12 md:px-14 lg:px-20">
      <div className="mb-8">
        <span className="section-label">Experience</span>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-px">
        {experience.map((job, idx) => (
          <div
            key={job.company}
            className="slant-card"
            style={{ marginBottom: idx < experience.length - 1 ? "3px" : 0 }}
          >
            <div className="slant-card-inner">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3
                  className="text-white uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    fontWeight: 800,
                    fontStyle: "italic",
                  }}
                >
                  {job.company}{" "}
                  <span
                    className="font-bold not-italic text-white/70"
                    style={{ fontSize: "0.9em" }}
                  >
                    / {job.role}
                  </span>
                </h3>
                <p
                  className="text-xs font-bold italic uppercase"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-racing-green)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="space-y-2 text-[13px] leading-relaxed text-white/75">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span
                      className="mt-[7px] h-[5px] w-[5px] shrink-0 skew-x-[-15deg]"
                      style={{ background: "var(--color-racing-green)" }}
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
