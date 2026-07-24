import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://github.com/ankitadhi",
    label: "GitHub",
    external: true,
    icon: (
      <svg
        viewBox="0 0 98 96"
        className="h-[16px] w-[16px]"
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
  },
  {
    href: "https://www.linkedin.com/in/ankit-adhikari-10853227a/",
    label: "LinkedIn",
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:ankitadankit@gmail.com",
    label: "Email",
    external: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
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
  },
];

function Footer() {
  const [status, setStatus] = useState("connecting");

  useEffect(() => {
    const timer = window.setTimeout(() => setStatus("live"), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <footer className="mt-8 bg-[color:var(--surface-strong)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Left column: Navigation links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-accent-hover text-sm text-[color:var(--muted)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center column: Brand + status */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--text)]">
            <span
              className={`status-dot ${
                status === "connecting"
                  ? "status-dot-connecting"
                  : "status-dot-live"
              }`}
            />
            <span>
              {status === "connecting" ? "Connecting..." : "All systems live"}
            </span>
          </div>
          <p className="text-sm text-[color:var(--muted)]">
            © 2026 Ankit Adhikari. All rights reserved.
          </p>
        </div>

        {/* Right column: Social icons */}
        <div className="flex items-center justify-center gap-3 lg:justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)] transition-all duration-200 hover:text-[color:var(--accent)] hover:border-[color:var(--accent)]/40"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
