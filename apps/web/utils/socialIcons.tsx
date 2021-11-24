import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoShareSocial,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";
import { IconType } from "react-icons";

export function getIcon(type: string): IconType {
  return type === "facebook"
    ? IoLogoFacebook
    : type === "twitter"
    ? IoLogoTwitter
    : type === "whatsapp"
    ? IoLogoWhatsapp
    : type === "linkedin"
    ? IoLogoLinkedin
    : type === "youtube"
    ? IoLogoYoutube
    : type === "instagram"
    ? IoLogoInstagram
    : IoShareSocial;
}
