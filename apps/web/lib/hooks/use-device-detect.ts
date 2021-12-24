/**
 * detects whether user is on mobile/tablet via useragent string
 * https://reedbarger.com/how-to-create-a-custom-usedevicedetect-react-hook/
 */
import { isBrowser, isDefined, isEmptyString } from "../../utils/guards";
import { useState, useEffect } from "react";

interface ReturnDeviceType {
  isMobile: boolean;
  userAgentString: string;
}

export const useDeviceDetect = (): ReturnDeviceType => {
  const [isMobile, setMobile] = useState(false);

  const userAgentString: string | undefined =
    typeof window.navigator === "undefined" ? "" : navigator.userAgent;

  useEffect(() => {
    const mobile = Boolean(
      userAgentString?.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile, userAgentString };
};
