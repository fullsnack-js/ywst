import { NavigationItem } from "types/sanity.objects";
import Link from "next/link";
import Navigation from "./navigation";
interface Props {
  mainNav: NavigationItem[];
}

const Header = ({ mainNav }: Props) => {
  return <Navigation navigation={mainNav} />;
};

export default Header;
