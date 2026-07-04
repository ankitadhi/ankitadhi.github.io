import { useState } from "react";

const links = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

type NavbarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[color:var(--border)] backdrop-blur-xl"
      style={{ background: "var(--nav-bg)" }}
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
          <nav
            className="hidden items-center gap-5 text-sm sm:flex"
            style={{ color: "var(--muted)" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-2 py-1 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
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
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border px-3 py-3 text-sm transition hover:text-cyan-400"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                  color: "var(--muted)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
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
