import { certificates, certificatesUrl, education, skills } from "../data/portfolio";
import { SectionTag } from "./decor";

function Label({ children }: { children: string }) {
  return (
    <h3 className="font-mono text-[11px] font-medium tracking-[0.24em] text-race-bright uppercase sm:text-xs">
      {children}
    </h3>
  );
}

export default function Skills() {
  return (
    <div id="skills">
      <SectionTag label="SKILLS" />

      <dl className="mt-14 space-y-6 sm:mt-16">
        {skills.map((group) => (
          <div key={group.category}>
            <dt>
              <Label>{group.category}</Label>
            </dt>
            <dd className="mt-1.5 text-[15px] leading-relaxed text-zinc-100">{group.items}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14">
        <Label>Education</Label>
        <p className="mt-3 font-condensed text-sm font-semibold tracking-[0.08em] text-white uppercase">
          {education.degree}
        </p>
        <p className="mt-1 text-sm text-zinc-300">
          {education.school} — {education.period}
        </p>
      </div>

      <div className="mt-14">
        <Label>Certificates</Label>
        <ul className="mt-4 space-y-3">
          {certificates.map((certificate) => (
            <li key={certificate} className="text-sm leading-relaxed text-zinc-300">
              <a
                href={certificatesUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-race-bright"
              >
                {certificate}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
