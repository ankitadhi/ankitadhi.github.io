import { useEffect, useRef, useState } from "react";

interface StaggerRevealOptions {
  /** Base delay increment in ms (default: 100) */
  baseDelay?: number;
  /** Maximum total cascade duration in ms (default: 800) */
  maxDuration?: number;
  /** IntersectionObserver threshold (default: 0.16) */
  threshold?: number;
}

function useStaggerReveal<T extends HTMLElement>(
  childCount: number,
  options?: StaggerRevealOptions,
): {
  containerRef: React.RefObject<T | null>;
  isVisible: boolean;
  getDelay: (index: number) => number;
} {
  const { baseDelay = 100, maxDuration = 800, threshold = 0.16 } =
    options ?? {};
  const containerRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const getDelay = (index: number): number => {
    if (prefersReducedMotion.current) return 0;
    if (childCount <= 1) return 0;

    const increment = Math.min(baseDelay, maxDuration / (childCount - 1));
    return index * increment;
  };

  return { containerRef, isVisible, getDelay };
}

export default useStaggerReveal;
