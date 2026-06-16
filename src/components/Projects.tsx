import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section className="border-r border-white/5 px-8 py-12 md:px-10">
      <div className="mb-8">
        <span className="section-label">Projects</span>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.title}>
            <h3
              className="mb-1 uppercase tracking-wide text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                fontWeight: 800,
                fontStyle: "italic",
              }}
            >
              {project.title}
            </h3>
            <p className="tag mb-2 text-[11px]">{project.tags.join(" · ")}</p>
            <p className="text-[13px] leading-relaxed text-white/70">
              {project.description}
            </p>
          </article>
        ))}
      </div>

      <div className="racing-stripes mt-12" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  );
}
