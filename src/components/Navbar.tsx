import { useEffect, useRef, useState } from "react";
import useNavbarScroll from "../hooks/useNavbarScroll";

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
  const menuOpenRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Keep menuOpenRef in sync with menuOpen state
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  const { isCompact } = useNavbarScroll(menuOpenRef);

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

  // Calculate underline position for the active link
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
    visible: boolean;
  }>({ left: 0, width: 0, visible: false });

  useEffect(() => {
    if (!activeSection) {
      setUnderlineStyle((prev) => ({ ...prev, visible: false }));
      return;
    }

    const activeLink = linkRefs.current.get(activeSection);
    const nav = navRef.current;
    if (!activeLink || !nav) {
      setUnderlineStyle((prev) => ({ ...prev, visible: false }));
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    setUnderlineStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      visible: true,
    });
  }, [activeSection]);

  return (
    <header
      className="sticky top-4 z-50 mx-auto mb-6 w-full max-w-6xl rounded-full border border-[color:var(--border)] px-2 py-2 shadow-[0_12px_40px_rgba(2,6,23,0.10)] backdrop-blur-2xl"
      style={{
        background: isCompact
          ? "color-mix(in srgb, var(--surface) 92%, transparent)"
          : "color-mix(in srgb, var(--surface) 70%, transparent)",
        transition: "background 250ms ease, padding 250ms ease",
      }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: isCompact ? "8px" : "16px",
          paddingBottom: isCompact ? "8px" : "16px",
          transition: "padding 250ms ease",
        }}
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          <span className="icon-badge-accent inline-flex h-8 w-8 items-center justify-center rounded-full text-sm">
            A
          </span>
          <span>Ankit</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="/Ankit_Adhikari_CV.pdf"
            download
            className="chip-accent chip-accent-hover hidden rounded-full px-3 py-2 text-sm font-medium transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Download CV
          </a>
          <nav
            ref={navRef}
            className="relative hidden items-center gap-5 text-sm sm:flex"
            style={{ color: "var(--muted)" }}
          >
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  ref={(el) => {
                    if (el) linkRefs.current.set(sectionId, el);
                  }}
                  className={`rounded-full px-2 py-1 transition hover:text-accent ${
                    isActive ? "text-accent" : ""
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            {/* Animated underline indicator */}
            <span
              className="pointer-events-none absolute bottom-0 h-[4px] rounded-full"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                opacity: underlineStyle.visible ? 1 : 0,
                background: "var(--accent)",
                transition:
                  "left 200ms ease-out, width 200ms ease-out, opacity 200ms ease-out",
              }}
              aria-hidden="true"
            />
          </nav>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:border-[color:var(--accent-70)] hover:text-accent"
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
                  className="rounded-2xl border px-3 py-3 text-sm transition hover:text-accent"
                  style={{
                    borderColor: isActive
                      ? "var(--accent-40)"
                      : "var(--border)",
                    backgroundColor: isActive
                      ? "var(--accent-10)"
                      : "var(--surface)",
                    color: isActive ? "var(--accent)" : "var(--muted)",
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
              className="chip-accent rounded-2xl px-3 py-3 text-center text-sm"
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
              className="chip-accent rounded-2xl px-3 py-3 text-sm"
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
