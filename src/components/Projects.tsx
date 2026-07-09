import { projects } from "../data/portfolio";
import { HazardStripes, SectionTag } from "./decor";

export default function Projects() {
  return (
    <div id="projects">
      <SectionTag label="PROJECTS" />
      <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="border-l-[3px] border-race pl-6">
              <h3 className="font-mono text-lg font-bold tracking-[0.28em] text-white uppercase sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] tracking-[0.22em] text-race-bright uppercase sm:text-xs">
                {project.stack}
              </p>
            </div>
            <p className="mt-4 ml-[3px] max-w-md pl-6 font-mono text-[13px] leading-[1.7] text-zinc-300/85">
              {project.description}
            </p>
          </article>
        ))}
      </div>
      <HazardStripes className="mt-20" />
    </div>
  );
}
