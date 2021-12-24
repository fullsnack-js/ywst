import { NavigationItem, Social } from "types/sanity.objects";
import { NavItem, SocialItem } from "./navigation";

interface Props {
  footerNav: NavigationItem[];
  socials: Social[];
}

const Footer = ({ footerNav, socials }: Props) => {
  return (
    <footer tw="bg-white">
      <div tw="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav tw="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footerNav.map((item: NavigationItem) => (
            <div key={item._key} tw="px-5 py-2">
              <NavItem {...item.navLink} />
            </div>
          ))}
        </nav>
        <div tw="mt-8 flex justify-center space-x-6">
          {socials.map((item) => (
            <SocialItem key={item._key} {...item} />
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
