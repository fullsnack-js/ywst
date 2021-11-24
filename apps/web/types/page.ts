import { NextPage } from "next";
import { AppProps } from "next/app";

export type CustomLayout = {
  getLayout?: (Component: React.ReactElement) => React.ReactNode;
};

export type NextPageWithLayout = NextPage & CustomLayout;

export type NextPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
