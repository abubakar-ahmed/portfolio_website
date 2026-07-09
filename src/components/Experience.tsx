import { experience, type ExperienceItem } from "../data/portfolio";
import { SectionTag } from "./decor";

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="relative">
      {/* Skewed card background; content stays straight */}
      <div
        aria-hidden
        className="absolute inset-0 -skew-x-[2.5deg] rounded-[3px] border border-white/[0.04] bg-gradient-to-b from-carbon to-carbon-deep shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)]"
      />
      <div className="relative px-6 py-6 sm:px-9 sm:py-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="text-[22px] text-white sm:text-2xl">
            <span className="stretch-tall font-display font-black italic">{item.company}</span>
            <span className="ml-3 font-condensed text-[13px] font-medium tracking-[0.16em] text-zinc-400 uppercase sm:text-sm">
              / {item.role}
            </span>
          </h3>
          <p className="font-mono text-[11px] tracking-[0.18em] text-race-bright sm:text-xs">
            {item.period} · {item.location}
          </p>
        </div>
        <ul className="mt-5 space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3.5">
              <span aria-hidden className="mt-[9px] size-[5px] shrink-0 rounded-full bg-zinc-100" />
              <span className="text-[15px] leading-relaxed text-zinc-200/95">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <SectionTag label="EXPERIENCE" />
        <div className="mt-12 space-y-8 sm:mt-14 sm:space-y-9">
          {experience.map((item) => (
            <ExperienceCard key={item.company} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
