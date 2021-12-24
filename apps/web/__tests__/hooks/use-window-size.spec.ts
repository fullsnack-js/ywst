import { renderHook } from "@testing-library/react-hooks";
import { useWindowSize } from "../../lib/hooks/use-window-size";

beforeAll(() => {
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event("resize"));
  };
});

describe("useWindowSize", () => {
  it("should return width and height of the current window", async () => {
    window.resizeTo(1440, 600);
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toEqual(1440);
    expect(result.current.height).toEqual(600);
  });

  it("should return default zero width and height when setting innerHeight and innerWidth to 0", async () => {
    window.resizeTo(0, 0);
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toEqual(0);
    expect(result.current.height).toEqual(0);
  });
});
