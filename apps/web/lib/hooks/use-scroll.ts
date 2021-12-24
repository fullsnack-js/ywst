import { isBrowser, isDefined, useEnhancedEffect } from "../../utils/guards";
import { useState } from "react";
import { useDebounce } from "./use-debounce";

type SSRRect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};
const EmptySSRRect: SSRRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};
interface StickyProps {
  minPxScrolled: number;
  minTopOffset: number;
  debounceMs?: number;
}
/**
 * useScroll React custom hook
 *
 * Original source: {@link https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4}
 * Typescript version: {@link https://gist.github.com/gusfune/5ee7d6815db966ab16d88dda7cf414da}
 *
 * @arg debounceMs optional ms to delay the scroll event
 * @param scrollX - Horizontal scroll position in pixels
 * @param scrollY - Vertical scroll position in pixels
 * @param scrollDirection - returns last position of movement, either `up`, `down` or `undefined`.
 *
 * @example ```ts
 * const { scrollX, scrollY, scrollDirection, visible } = useScroll({minPxScrolled: 70, minTopOffset: 10, debounceMs: 100});
 * ```
 */

const useScroll = ({
  minPxScrolled = 70,
  minTopOffset = 10,
  debounceMs = 100,
}: StickyProps) => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [bodyOffset, setBodyOffset] = useState<DOMRect | SSRRect>(
    typeof window === "undefined" || !window.document
      ? EmptySSRRect
      : document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<
    "down" | "up" | undefined
  >();
  const [visible, setVisible] = useState(true);
  const isSticky = () =>
    (lastScrollTop > scrollY && lastScrollTop > minPxScrolled) ||
    scrollY < minTopOffset;
  const listener = () => {
    setBodyOffset(
      !isBrowser || !window.document
        ? EmptySSRRect
        : document.body.getBoundingClientRect()
    );
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
    setVisible(isSticky());
  };

  const handleScroll =
    debounceMs != null ? useDebounce(listener, debounceMs) : listener;

  useEnhancedEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  console.log({
    scrollY,
    scrollX,
    scrollDirection,
    visible,
    lastScrollTop,
    bodyOffset,
  });
  return {
    scrollY,
    scrollX,
    scrollDirection,
    visible,
  };
};

export { useScroll };
