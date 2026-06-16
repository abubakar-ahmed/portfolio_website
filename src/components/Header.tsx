import { profile } from "../data/portfolio";

export function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="hero-band" aria-hidden="true" />
      <div className="hero-band-glow" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen flex-col px-8 pb-16 pt-10 md:px-14 lg:px-20">
        {/* Top bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p
            className="font-mono text-[11px] tracking-[0.18em] text-white/80 uppercase md:text-[11px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {profile.roles}
          </p>
          <div
            className="font-mono text-[11px] leading-[1.85] text-white/70 md:text-right md:text-[11px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <p>
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-[var(--color-racing-green)]"
              >
                {profile.email}
              </a>
            </p>
            <p>{profile.phone}</p>
            <p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--color-racing-green)]"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--color-racing-green)]"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Name block */}
        <div className="flex flex-1 flex-col justify-center py-12 md:py-20">
          <h1
            className="leading-[0.88] tracking-tight text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 13vw, 9.5rem)",
              fontWeight: 800,
              fontStyle: "italic",
            }}
          >
            <span className="block">{profile.firstName}</span>
            <span className="block">{profile.lastName}</span>
          </h1>
          <div className="hero-racing-stripes mt-6" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="max-w-[420px] text-[13.5px] leading-[1.8] text-white/70 md:max-w-[480px] md:text-[14px]">
          {profile.summary}
        </p>
      </div>
    </header>
  );
}
