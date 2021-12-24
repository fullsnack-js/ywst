import { groq } from "next-sanity";
import { siteSettingsFields } from "./fragments";

export const globalSettingsQuery = groq`*[_type == "siteSettings"]{
  ${siteSettingsFields}
}`;
