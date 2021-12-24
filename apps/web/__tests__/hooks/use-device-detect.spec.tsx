import React from "react";
import { useDeviceDetect } from "../../lib/hooks/use-device-detect";
import { clear, mockUserAgent } from "jest-useragent-mock";
import { renderHook } from "@testing-library/react-hooks";
describe("useDeviceDetect", () => {
  afterEach(() => {
    clear();
  });

  it(`should return "mobile" when request is served from mobile`, () => {
    const mobileUserAgent =
      "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36";
    mockUserAgent(mobileUserAgent);
    const { result } = renderHook(() => useDeviceDetect());

    expect(result.current.isMobile).toBe(true);
    expect(window.navigator.userAgent).toStrictEqual(mobileUserAgent);
    expect(result.current.userAgentString).toStrictEqual(mobileUserAgent);
  });

  it(`should return "mobile" when request is served from tablet`, () => {
    const tabletUserAgent =
      "Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1";
    mockUserAgent(tabletUserAgent);
    const { result } = renderHook(() => useDeviceDetect());

    expect(result.current.isMobile).toBe(true);
    expect(window.navigator.userAgent).toStrictEqual(tabletUserAgent);
    expect(result.current.userAgentString).toStrictEqual(tabletUserAgent);
  });

  it("should return false when useragent is not mobile", () => {
    const desktopUserAgent =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4450.0 Safari/537.36";
    mockUserAgent(desktopUserAgent);
    const { result } = renderHook(() => useDeviceDetect());
    expect(result.current.isMobile).toBe(false);
    expect(window.navigator.userAgent).toStrictEqual(desktopUserAgent);
  });
});
