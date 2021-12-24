/**
  https://github.com/chidojiro/sdk-react-test/blob/21afd638cb667e4437b348e433c79867a2f70cf7/src/hooks/useScrollToTop/useScrollToTop.ts
*/

import React from "react";

const isRef = (target: any): target is React.RefObject<any> =>
  !!target?.current;

const useScrollToTop = (
  refOrElement: React.RefObject<Element> | Element,
  deps: any[]
) => {
  React.useLayoutEffect(() => {
    const target = isRef(refOrElement) ? refOrElement.current : refOrElement;

    target?.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useScrollToTop;
