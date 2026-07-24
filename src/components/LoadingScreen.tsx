import { useEffect, useState } from "react";

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // After 1100ms (progress bar fill), trigger exit animation
    const exitTimer = window.setTimeout(() => setExiting(true), 1100);
    // After 1500ms total (1100ms fill + 400ms exit), remove from DOM
    const removeTimer = window.setTimeout(() => setVisible(false), 1500);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_top,_var(--accent-20),_transparent_40%),rgba(2,6,23,0.96)] backdrop-blur-2xl"
      style={
        exiting
          ? { animation: "loading-exit 400ms ease forwards" }
          : undefined
      }
    >
      <div className="glass-card flex flex-col items-center gap-4 rounded-[28px] border border-[color:var(--accent-20)] px-8 py-8 shadow-[0_0_60px_var(--accent-15)] sm:px-10">
        {/* Spinner */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--accent-30)]">
          <div className="absolute inset-2 rounded-full border border-[color:var(--accent-40)]" />
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[color:var(--accent-70)] border-t-transparent" />
        </div>

        {/* Site title */}
        <p className="gradient-text text-xl font-bold tracking-wide">
          Ankit Adhikari
        </p>

        <div className="text-center">
          <p className="text-lg font-semibold tracking-[0.2em] text-accent uppercase">
            Loading portfolio
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Preparing a polished experience for you.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full border border-[color:var(--accent-20)] bg-[color:var(--accent-10)]">
          <div
            className="progress-fill-animated h-full rounded-full"
            style={{
              background: "var(--accent-grad)",
              animation: "progress-fill 1100ms ease-out forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
