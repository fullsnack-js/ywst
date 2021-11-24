import * as React from "react";

import { useWindowSize } from "lib/hooks/use-window-size";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const { width: windowWidth } = useWindowSize();

  const isMobile = windowWidth <= 640;
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
