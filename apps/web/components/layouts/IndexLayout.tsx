import Footer from "@components/common/footer";
import * as React from "react";
import { SiteSettings } from "types/sanity.documents";
import { Seo as SeoMeta } from "types/sanity.objects";
import Header from "../common/header";
import Seo from "../common/seo";

interface Props {
  siteSettings: SiteSettings;
  children?: React.ReactNode | React.ReactNode[];
  seo?: SeoMeta;
}

const IndexLayout = ({ siteSettings, seo, children }: Props) => {
  return (
    <>
      <Seo seo={seo} defaultSeo={siteSettings.seo} />
      <Header mainNav={siteSettings.mainNav} />
      {children}
      <Footer
        footerNav={siteSettings.footerNav}
        socials={siteSettings.socials}
      />
    </>
  );
};

export default IndexLayout;
