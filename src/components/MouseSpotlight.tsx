import { useEffect, useState } from "react";

type PointerPosition = {
  x: number;
  y: number;
};

function MouseSpotlight() {
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });

  const shouldRender =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!shouldRender) return;

    const onMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      <div
        className="absolute h-72 w-72 rounded-full backdrop-blur-2xl"
        style={{
          left: pointer.x - 144,
          top: pointer.y - 144,
          transform: "translate3d(0, 0, 0)",
          border: "1px solid color-mix(in srgb, var(--text) 14%, transparent)",
          background: "color-mix(in srgb, var(--text) 5%, transparent)",
          boxShadow: "0 0 120px var(--accent-15)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${pointer.x}px ${pointer.y}px, color-mix(in srgb, var(--accent) 18%, transparent), transparent 24%), radial-gradient(circle at ${pointer.x}px ${pointer.y}px, color-mix(in srgb, var(--accent-2) 10%, transparent), transparent 42%)`,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

export default MouseSpotlight;
