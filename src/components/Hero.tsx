import { useEffect, useState } from "react";
import AvailabilityBadge from "./AvailabilityBadge";

const focusPoints = [
  "Transformers and NLP workflows",
  "Practical full-stack development",
  "Data preprocessing and model evaluation",
];

const socialLinks = [
  {
    href: "https://github.com/ankitadhi",
    label: "GitHub",
    icon: (
      <svg
        viewBox="0 0 98 96"
        className="h-[18px] w-[18px]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        />
      </svg>
    ),
    hoverClass: "hover:text-white hover:border-white/40 hover:bg-white/10",
  },
  {
    href: "https://www.linkedin.com/in/ankit-adhikari-10853227a/",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    hoverClass:
      "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10",
  },
  {
    href: "mailto:ankitadankit@gmail.com",
    label: "Gmail",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"
          fill="#f1f5f9"
          fillOpacity="0.06"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 6l10 7 10-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 6l10 7"
          stroke="#EA4335"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22 6l-10 7"
          stroke="#34A853"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    hoverClass:
      "hover:text-red-400 hover:border-red-400/40 hover:bg-red-400/10",
  },
];

const greeting = "Hi, I'm Ankit Adhikari.";

function Hero() {
  // Letter-by-letter heading
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length >= greeting.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(
      () => setDisplayed(greeting.slice(0, displayed.length + 1)),
      55,
    );
    return () => clearTimeout(t);
  }, [displayed]);

  return (
    <section id="home" className="scroll-mt-24 py-10 sm:py-12">
      {/* ── Greeting + intro ── */}
      <div className="mb-8 animate-fade-in-up">
        <AvailabilityBadge />
        <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
          ML / NLP · Full-stack
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl lg:text-5xl">
          {/* Render letter by letter, colour "Ankit Adhikari" portion */}
          {displayed.split("").map((char, i) => {
            const nameStart = "Hi, I'm ".length;
            const nameEnd = nameStart + "Ankit Adhikari".length;
            const isName = i >= nameStart && i < nameEnd;
            return (
              <span key={i} className={isName ? "text-cyan-400" : ""}>
                {char}
              </span>
            );
          })}
          {!done && <span className="typewriter-cursor" />}
        </h1>

        <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
          I build practical ML/NLP systems and full-stack products that turn
          ideas into reliable user experiences.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[color:var(--border)] px-5 py-2.5 text-sm font-medium text-[color:var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-400"
          >
            Contact me
          </a>

          {/* ── Favicons / social links (moved here from the removed profile card) ── */}
          <div className="ml-1 flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)] transition-all duration-200 ${link.hoverClass}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Current Focus card ── */}
      <div className="animate-fade-in-up [animation-delay:200ms]">
        <div className="glass-card interactive-card rounded-[28px] p-6 shadow-[0_0_48px_rgba(8,145,178,0.12)] sm:p-7">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Current focus
            </p>
          </div>

          <div className="mt-5 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[color:var(--text)]">
                  AI + Product Thinking
                </p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">
                  Building systems with measurable impact.
                </p>
              </div>
              <div className="relative h-14 w-14 shrink-0">
                <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
                <div className="absolute inset-2 rounded-full border border-cyan-400/40" />
                <div className="absolute inset-4 rounded-full bg-cyan-500/15" />
                <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-cyan-400" />
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {focusPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 px-4 py-3"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
