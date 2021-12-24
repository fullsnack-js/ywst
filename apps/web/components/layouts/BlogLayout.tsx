import { ScrollHeader } from "@components/common/ScrollHeader";
import { DEFAULT_SETTINGS } from "constants/siteSettings";
import * as React from "react";
import { Seo as SeoMeta } from "types/sanity.objects";
import Header from "../common/header";
import Seo from "../common/seo";

interface Props {
  children?: React.ReactNode;
  seo?: SeoMeta;
}

const IndexLayout = ({ seo, children }: Props) => {
  const { seo: defaultSeo, mainNav, footerNav, socials } = DEFAULT_SETTINGS;

  return (
    <>
      <Seo seo={seo} defaultSeo={defaultSeo} />
      {children}
    </>
  );
};

export default IndexLayout;
