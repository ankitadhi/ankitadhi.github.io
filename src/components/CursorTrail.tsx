import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
};

type Ripple = {
  id: number;
  x: number;
  y: number;
};

function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripple, setRipple] = useState<Ripple[]>([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });

      const velocity = Math.hypot(event.movementX, event.movementY);
      if (velocity > 2) {
        const particle: Particle = {
          id: Date.now() + Math.random(),
          x: event.clientX,
          y: event.clientY,
          size: 3 + Math.random() * 4,
          opacity: 0.25 + Math.random() * 0.3,
        };

        setParticles((prev) => [...prev.slice(-14), particle]);

        const timeout = window.setTimeout(() => {
          setParticles((prev) =>
            prev.filter((item) => item.id !== particle.id),
          );
        }, 600);

        timersRef.current.push(timeout);
        if (timersRef.current.length > 24) {
          const oldTimer = timersRef.current.shift();
          if (oldTimer) window.clearTimeout(oldTimer);
        }
      }
    };

    const onLeave = () => setCursor((prev) => ({ ...prev, visible: false }));
    const onClick = (event: MouseEvent) => {
      const item: Ripple = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
      };
      setRipple((prev) => [...prev.slice(-4), item]);
      window.setTimeout(() => {
        setRipple((prev) => prev.filter((entry) => entry.id !== item.id));
      }, 500);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        className={`absolute h-5 w-5 rounded-full border border-cyan-300/80 transition-opacity duration-200 ${cursor.visible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 18px rgba(34, 211, 238, 0.2)",
        }}
      />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/70 blur-[1px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {ripple.map((entry) => (
        <span
          key={entry.id}
          className="absolute rounded-full border border-cyan-300/70"
          style={{
            left: entry.x,
            top: entry.y,
            width: 20,
            height: 20,
            transform: "translate(-50%, -50%)",
            animation: "cursor-ripple 0.5s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}

export default CursorTrail;
