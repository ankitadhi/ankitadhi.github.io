import { useEffect, useState } from "react";

function Footer() {
  const [status, setStatus] = useState("connecting");

  useEffect(() => {
    const timer = window.setTimeout(() => setStatus("live"), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <footer className="mt-8 border-t border-[color:var(--border)] bg-[color:var(--surface-strong)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-[color:var(--muted)] sm:px-6 lg:flex-row lg:px-8">
        <p>© 2026 Ankit Adhikari. All rights reserved.</p>
        <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[color:var(--text)]">
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
      </div>
    </footer>
  );
}

export default Footer;
