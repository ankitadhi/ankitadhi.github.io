import { useEffect, useState } from "react";

type PointerPosition = {
  x: number;
  y: number;
};

function MouseSpotlight() {
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      <div
        className="absolute h-72 w-72 rounded-full border border-white/20 bg-white/10 shadow-[0_0_120px_rgba(34,211,238,0.16)] backdrop-blur-2xl"
        style={{
          left: pointer.x - 144,
          top: pointer.y - 144,
          transform: "translate3d(0, 0, 0)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${pointer.x}px ${pointer.y}px, rgba(34,211,238,0.18), transparent 24%), radial-gradient(circle at ${pointer.x}px ${pointer.y}px, rgba(167,139,250,0.1), transparent 42%)`,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

export default MouseSpotlight;
