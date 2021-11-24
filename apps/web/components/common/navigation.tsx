import {
  NavigationItem,
  ExternalNavItem,
  InternalNavItem,
  Social,
} from "types/sanity.objects";
import Link from "next/link";
import { getIcon } from "@utils/socialIcons";

export type ItemProps = ExternalNavItem | InternalNavItem;

export const SocialItem = ({ type, url }: Social) => {
  const Icon = getIcon(type);
  return (
    <a key={type} href={url}>
      <Icon />
    </a>
  );
};

export const NavItem = ({ link, linkType }: ItemProps) => {
  if (linkType === "external") {
    return (
      <a key={link.title} href={link.href}>
        {link.title}
      </a>
    );
  } else {
    return (
      <Link key={link.title} href={`/${link.route.slug}`}>
        {link.title}
      </Link>
    );
  }
};

export interface NavigationProps {
  navigation: NavigationItem[];
  socials?: Social[];
}

const Navigation = ({ navigation, socials }: NavigationProps) => {
  const hasSocialNav = socials && socials.length;
  return hasSocialNav ? (
    <nav>
      {socials.map((social: Social) => (
        <SocialItem key={social._key} {...social} />
      ))}
      {navigation.map((item: NavigationItem) => (
        <NavItem key={item._key} {...item.navLink} />
      ))}
    </nav>
  ) : (
    <nav>
      {navigation.map((item: NavigationItem) => (
        <NavItem key={item._key} {...item.navLink} />
      ))}
    </nav>
  );
};

export default Navigation;
