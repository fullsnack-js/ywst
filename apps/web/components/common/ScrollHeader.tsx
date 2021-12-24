// https:// www.devtwins.com/blog/sticky-navbar-hides-scroll
import { useScroll } from "@lib/hooks/use-scroll";
import { useSticky } from "@lib/hooks/use-sticky";
import { useLayoutEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import { NavigationItem } from "types/sanity.objects";
import { NavItem } from "./navigation";

interface HeaderProps {
  visible: boolean;
}

const StyledHeader = styled.header(({ visible }: HeaderProps) => [
  tw`bg-transparent flex fixed items-center justify-between h-16 px-0 py-8 w-full left-0 -top-16 transition-top duration-600 opacity-0`,
  visible && tw`bg-blue-100 top-0 opacity-100`,
]);
const StyledNav = tw.nav`flex space-x-6 items-center m-2`;

interface Props {
  navigation: NavigationItem[];
}
export const ScrollHeader = ({ navigation }: Props) => {
  // const { scrollY, scrollDirection, visible } = useScroll({
  //   minPxScrolled: 70,
  //   minTopOffset: 10,
  //   debounceMs: 100,
  // });
  const { visible } = useSticky({
    minPxScrolled: 80,
    minTopOffset: 10,
    debounceMs: 100,
  });
  return (
    <StyledHeader {...{ visible }}>
      <span tw="text-indigo-500">Logo</span>
      <StyledNav>
        {navigation.map((item, index) => (
          <NavItem key={item._key} {...item.navLink} />
        ))}
      </StyledNav>
    </StyledHeader>
  );
};
