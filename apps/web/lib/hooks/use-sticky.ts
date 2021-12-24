// https://www.devtwins.com/blog/sticky-navbar-hides-scroll
import { useLayoutEffect, useEffect, useState } from "react";
// import { useScroll } from "./use-scroll";
import { useDebounce } from "./use-debounce";
import { isBrowser, useEnhancedEffect } from "../../utils/guards";

interface ScrollPosition {
  scrollY: number;
}
interface StickyProps {
  minPxScrolled: number;
  minTopOffset: number;
  debounceMs: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Positions {
  previous?: Position;
  current?: Position;
}

export type Callback = (positions?: Positions) => void;
interface StickyResult {
  visible: boolean;
  prevScrollPos: number;
  // currentScrollPos: number;
}
export function useSticky({
  minPxScrolled = 70,
  minTopOffset = 10,
  debounceMs = 100,
}: StickyProps): StickyResult {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = isBrowser ? window.scrollY : 0;
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos > minPxScrolled) ||
        currentScrollPos < minTopOffset
    );
    setPrevScrollPos(currentScrollPos);
  };
  const debouncedScroll = useDebounce(handleScroll, debounceMs);

  useEnhancedEffect(() => {
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [prevScrollPos, visible, debouncedScroll]);
  console.log({ prevScrollPos, visible });
  return { prevScrollPos, visible };
}
