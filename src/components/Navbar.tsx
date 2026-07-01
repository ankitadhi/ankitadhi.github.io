import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm text-cyan-400">
            A
          </span>
          <span>Ankit</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 sm:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-2 py-1 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 sm:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-sm text-slate-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
