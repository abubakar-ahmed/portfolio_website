import { profile } from "../data/portfolio";
import { HazardStripes } from "./decor";

export default function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Green diagonal sweep: soft fade in from the top, hard diagonal cut at the bottom */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 44%, 0 72%)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(1, 22, 12, 0) 6%, rgba(9, 66, 37, 0.75) 55%, rgba(0, 162, 79, 0.96) 97%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(85% 70% at 6% 74%, rgba(46, 224, 126, 0.55), transparent 62%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, transparent 52%, rgba(4, 8, 6, 0.6) 88%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
        {/* Top bar: role + contacts */}
        <div className="flex flex-col gap-5 font-mono text-[11px] tracking-[0.28em] sm:flex-row sm:items-start sm:justify-between sm:text-xs">
          <p>{profile.tagline}</p>
          <div className="space-y-2.5 tracking-[0.22em] sm:text-right">
            <p>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-race-bright">
                {profile.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-race-bright"
              >
                {profile.phone}
              </a>
            </p>
            <p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-race-bright"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-race-bright"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Abubakar-Ahmed-Resume.pdf"
                className="inline-flex items-center gap-2 transition-colors hover:text-race-bright"
              >
                Resume
                <svg
                  aria-hidden
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </p>
          </div>
        </div>

        {/* Name */}
        <h1 className="stretch-tall mt-14 font-display text-[clamp(3.4rem,11vw,8rem)] leading-[1.02] font-black text-white italic sm:mt-20">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>

        <HazardStripes className="mt-7" />

        {/* Bio pinned toward the bottom, on the black area below the diagonal */}
        <p className="mt-auto max-w-2xl pt-16 pb-4 text-base leading-relaxed text-zinc-100/90 sm:pb-8 sm:text-lg">
          {profile.bio}
        </p>
      </div>
    </header>
  );
}
