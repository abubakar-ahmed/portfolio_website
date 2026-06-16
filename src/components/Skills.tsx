import { certificates, education, skills } from "../data/portfolio";

export function Skills() {
  return (
    <section className="px-8 py-12 md:px-10">
      <div className="mb-8">
        <span className="section-label">Skills</span>
      </div>

      <div className="space-y-3 text-[13px] leading-relaxed">
        {skills.map((group) => (
          <p key={group.category}>
            <span className="skill-category">{group.category}: </span>
            <span className="text-white/75">{group.items}</span>
          </p>
        ))}
      </div>

      <div className="mt-10 border-t border-white/8 pt-8">
        <h3
          className="mb-1 uppercase tracking-wide text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 800,
            fontStyle: "italic",
          }}
        >
          {education.degree}
        </h3>
        <p className="text-[13px] text-white/65">
          {education.school} · {education.period}
        </p>
      </div>

      <div className="mt-8">
        <h3
          className="mb-3 uppercase tracking-wide text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 800,
            fontStyle: "italic",
          }}
        >
          Certificates
        </h3>
        <ul className="space-y-2 text-[13px] text-white/70">
          {certificates.map((cert) => (
            <li key={cert} className="flex gap-2.5">
              <span
                className="mt-[2px] shrink-0 font-bold"
                style={{ color: "var(--color-racing-green)" }}
              >
                ▸
              </span>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
