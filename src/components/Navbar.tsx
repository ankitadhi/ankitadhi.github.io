import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll-spy: watch each section and mark whichever one is most visible
  // in the viewport as "active" so the nav link lights up as you scroll.
  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-4 z-50 mx-auto mb-6 w-full max-w-6xl rounded-full border border-white/10 bg-[color:var(--surface)]/70 px-2 py-2 shadow-[0_12px_40px_rgba(2,6,23,0.16)] backdrop-blur-2xl"
      style={{
        background: "color-mix(in srgb, var(--surface) 80%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm text-cyan-400">
            A
          </span>
          <span>Ankit</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="/Ankit_Adhikari_CV.pdf"
            download
            className="hidden rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-500/20 sm:inline-flex"
          >
            Download CV
          </a>
          <nav
            className="hidden items-center gap-5 text-sm sm:flex"
            style={{ color: "var(--muted)" }}
          >
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-2 py-1 transition hover:text-cyan-400 ${
                    isActive ? "bg-cyan-500/10 text-cyan-400" : ""
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:border-cyan-300/50 hover:text-cyan-300"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--text)",
            }}
            aria-label="Toggle theme"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border sm:hidden"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--text)",
            }}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="border-t px-4 py-4 sm:hidden"
          style={{ borderColor: "var(--border)", background: "var(--nav-bg)" }}
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl border px-3 py-3 text-sm transition hover:text-cyan-400"
                  style={{
                    borderColor: isActive
                      ? "rgba(34, 211, 238, 0.4)"
                      : "var(--border)",
                    backgroundColor: isActive
                      ? "rgba(34, 211, 238, 0.1)"
                      : "var(--surface)",
                    color: isActive ? "#22d3ee" : "var(--muted)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/Ankit_Adhikari_CV.pdf"
              download
              className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-3 text-center text-sm text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
            <button
              type="button"
              onClick={() => {
                onToggleTheme();
                setMenuOpen(false);
              }}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-3 text-sm text-cyan-300"
            >
              {theme === "dark"
                ? "Switch to Light mode ☀"
                : "Switch to Dark mode ☾"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
