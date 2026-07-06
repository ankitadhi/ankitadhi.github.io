import { useEffect, useRef } from "react";

/**
 * Makes an element gently drift toward the cursor when the pointer is
 * within `radius` px of its center, and spring back when the pointer
 * leaves. No-ops on touch devices / reduced-motion.
 */
export function useMagnetic<T extends HTMLElement>(
  strength = 0.35,
  radius = 90,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const canAnimate =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate) return;

    node.style.transition = "transform 0.2s ease-out";

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < radius) {
        node.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        node.style.transform = "translate(0, 0)";
      }
    };

    const onLeave = () => {
      node.style.transform = "translate(0, 0)";
    };

    window.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, radius]);

  return ref;
}
