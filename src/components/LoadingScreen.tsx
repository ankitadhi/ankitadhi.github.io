import { useEffect, useState } from "react";

function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_top,_var(--accent-20),_transparent_40%),rgba(2,6,23,0.96)] backdrop-blur-2xl">
      <div className="glass-card flex flex-col items-center gap-4 rounded-[28px] border border-[color:var(--accent-20)] px-8 py-8 shadow-[0_0_60px_var(--accent-15)] sm:px-10">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--accent-30)]">
          <div className="absolute inset-2 rounded-full border border-[color:var(--accent-40)]" />
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[color:var(--accent-70)] border-t-transparent" />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold tracking-[0.2em] text-accent uppercase">
            Loading portfolio
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Preparing a polished experience for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
