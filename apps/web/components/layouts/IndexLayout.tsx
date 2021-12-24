import Footer from "@components/common/footer";
import * as React from "react";
import { Seo as SeoMeta } from "types/sanity.objects";
// import Header from "../common/header";
import Seo from "../common/seo";
import { DEFAULT_SETTINGS } from "constants/siteSettings";
import { ScrollHeader } from "@components/common/ScrollHeader";
import { useState } from "react";
import { MobileMenuToggleButton } from "@components/common/navigation/MobileMenuToggle";
import MobileNav from "@components/common/navigation/MobileNav";
interface Props {
  children?: React.ReactNode | React.ReactNode[];
  seo?: SeoMeta;
}

const IndexLayout = ({ seo, children }: Props) => {
  const { seo: defaultSeo, mainNav, footerNav, socials } = DEFAULT_SETTINGS;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Seo seo={seo} defaultSeo={defaultSeo} />
      <ScrollHeader navigation={mainNav} />
      <MobileMenuToggleButton
        open={isMenuOpen}
        handleClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      {children}
      <MobileNav
        onClose={() => {
          setIsMenuOpen(false);
        }}
        navigation={mainNav}
        visible={isMenuOpen}>
        {children}
      </MobileNav>
      <Footer footerNav={footerNav} socials={socials} />
    </>
  );
};

export default IndexLayout;
