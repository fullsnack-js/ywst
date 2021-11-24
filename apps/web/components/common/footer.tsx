import Link from "next/link";
import tw, { styled } from "twin.macro";
import { NavigationItem, Social } from "types/sanity.objects";
import Navigation, { ItemProps } from "./navigation";
import { getIcon } from "@utils/socialIcons";

interface Props {
  footerNav: NavigationItem[];
  socials: Social[];
}

export const SocialItem = ({ type, url }: Social) => {
  const Icon = getIcon(type);
  return (
    <a key={type} href={url} tw="text-gray-400 hover:text-gray-500">
      <span tw="sr-only">{type}</span>
      <Icon tw="h-6 w-6" aria-hidden="true" />
    </a>
  );
};

const StyledNavLink = tw.a`text-base text-gray-500 hover:text-gray-900`;
const FooterNavItem = ({ link, linkType }: ItemProps) => {
  if (linkType === "external") {
    return (
      <StyledNavLink key={link.title} href={link.href}>
        {link.title}
      </StyledNavLink>
    );
  } else {
    return (
      <Link key={link.title} href={`/${link.route.slug}`}>
        <StyledNavLink>{link.title}</StyledNavLink>
      </Link>
    );
  }
};

const Footer = ({ footerNav, socials }: Props) => {
  return (
    <footer tw="bg-white">
      <div tw="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav tw="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footerNav.map((item: NavigationItem) => (
            <div key={item._key} tw="px-5 py-2">
              <FooterNavItem {...item.navLink} />
            </div>
          ))}
        </nav>
        <div tw="mt-8 flex justify-center space-x-6">
          {socials.map((item) => (
            <SocialItem {...item} />
          ))}
        </div>
        <p tw="mt-8 text-center text-base text-gray-400">
          &copy; Yoga with Susan Turis, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
