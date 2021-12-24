import { NavigationItem, Social } from "types/sanity.objects";
import { SocialItem, NavItem } from "./navigation";

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
