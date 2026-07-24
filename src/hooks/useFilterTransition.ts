import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "fading-out" | "fading-in";

interface FilterTransitionState<T> {
  displayedItems: T[];
  phase: Phase;
  containerMinHeight: number | null;
}

/**
 * Manages the fade-out/fade-in animation cycle when filtered items change.
 *
 * State machine: idle → fading-out → fading-in → idle
 *
 * On filter change:
 * 1. Capture current container height (prevents layout shift)
 * 2. Fade out existing items (200ms default)
 * 3. Swap displayed items to the new set
 * 4. Fade in new items (300ms default)
 * 5. Release min-height, return to idle
 *
 * Respects `prefers-reduced-motion` — skips all animation phases and swaps immediately.
 * Cancels in-progress transitions on rapid filter changes.
 */
export function useFilterTransition<T>(
  items: T[],
  duration: { fadeOut: number; fadeIn: number } = { fadeOut: 200, fadeIn: 300 },
): FilterTransitionState<T> & { containerRef: React.RefObject<HTMLElement | null> } {
  const containerRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);
  const latestItems = useRef(items);

  const [state, setState] = useState<FilterTransitionState<T>>({
    displayedItems: items,
    phase: "idle",
    containerMinHeight: null,
  });

  // Keep a ref to the latest items for use inside timeouts
  latestItems.current = items;

  useEffect(() => {
    // Skip the initial render — items are already set
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Cancel any in-progress transition on rapid filter changes
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Reduced motion: swap immediately, no animation
    if (prefersReducedMotion) {
      setState({
        displayedItems: items,
        phase: "idle",
        containerMinHeight: null,
      });
      return;
    }

    // Capture container height to prevent layout shift
    const containerHeight = containerRef.current?.offsetHeight ?? null;

    // Phase 1: fading-out (keep old items displayed)
    setState((prev) => ({
      ...prev,
      phase: "fading-out",
      containerMinHeight: containerHeight,
    }));

    // After fade-out completes, swap items and start fade-in
    timeoutRef.current = setTimeout(() => {
      const currentItems = latestItems.current;

      // Phase 2: fading-in (swap to new items)
      setState({
        displayedItems: currentItems,
        phase: "fading-in",
        containerMinHeight: containerHeight,
      });

      // After fade-in completes, return to idle
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        setState({
          displayedItems: latestItems.current,
          phase: "idle",
          containerMinHeight: null,
        });
      }, duration.fadeIn);
    }, duration.fadeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    ...state,
    containerRef,
  };
}
