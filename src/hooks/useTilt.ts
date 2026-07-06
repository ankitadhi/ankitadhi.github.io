import { useEffect, useRef } from "react";

/**
 * Adds a subtle mouse-tracked 3D tilt to whatever element the returned ref
 * is attached to. Automatically no-ops on touch devices and when the user
 * has requested reduced motion.
 */
export function useTilt<T extends HTMLElement>(maxTilt = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const canTilt =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canTilt) return;

    let frame: number | null = null;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width; // 0 -> 1
      const py = (event.clientY - rect.top) / rect.height; // 0 -> 1

      const rotateY = (px - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - py) * maxTilt * 2;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      });
    };

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      node.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    node.style.transition = "transform 0.2s ease";
    node.style.willChange = "transform";

    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [maxTilt]);

  return ref;
}
