import { NavigationItem } from "types/sanity.objects";
import Navigation from "./Nav";
interface Props {
  mainNav: NavigationItem[];
}

const Header = ({ mainNav }: Props) => {
  // return <div />;
  return <Navigation navigation={mainNav} />;
};

export default Header;
