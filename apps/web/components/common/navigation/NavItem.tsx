import { pathResolver } from "@utils/pathResolver";
import NextLink from "next/link";
import tw from "twin.macro";
import { NavigationItem } from "types/sanity.objects";

export type ItemProps = NavigationItem["navLink"];
const StyledNavLink = tw.a`text-base text-gray-500 hover:text-gray-900`;
export const NavItem = ({ link, linkType }: ItemProps) => {
  // console.log({ link });
  if (linkType === "external") {
    return (
      <StyledNavLink key={link.title} href={link.href}>
        {link.title}
      </StyledNavLink>
    );
  } else {
    return (
      <NextLink key={link.title} href={pathResolver(link.route)} passHref>
        <StyledNavLink>{link.title}</StyledNavLink>
      </NextLink>
    );
  }
};
