import { useEffect, useRef, useState } from "react";

interface NavbarScrollState {
  isCompact: boolean;
  /** Whether scroll-down threshold (100px) has been crossed */
  scrolledPast: boolean;
}

/**
 * Tracks scroll position to determine compact/relaxed navbar state.
 *
 * Uses hysteresis to prevent flicker:
 * - Compact activates when scrollY > 100
 * - Relaxed restores when scrollY <= 50
 *
 * @param menuOpenRef - Optional ref to mobile menu open state.
 *   When true, scroll state changes are suppressed.
 */
function useNavbarScroll(
  menuOpenRef?: React.RefObject<boolean>,
): NavbarScrollState {
  const [isCompact, setIsCompact] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const isCompactRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      // Do not change state while mobile menu is open
      if (menuOpenRef?.current) return;

      const y = window.scrollY;

      setScrolledPast(y > 100);

      // Hysteresis: compact at >100, relaxed at <=50
      if (!isCompactRef.current && y > 100) {
        isCompactRef.current = true;
        setIsCompact(true);
      } else if (isCompactRef.current && y <= 50) {
        isCompactRef.current = false;
        setIsCompact(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Set initial state based on current scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpenRef]);

  return { isCompact, scrolledPast };
}

export default useNavbarScroll;
