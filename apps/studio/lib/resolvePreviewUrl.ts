import { BASE_URL, isDev } from "./constants";

const { SANITY_PREVIEW_SECRET, SANITY_PREVIEW_SITE } = process.env;

export default function resolvePreviewUrl(document) {
  if (!SANITY_PREVIEW_SECRET) {
    console.log("No preview key provided");
  }

  if (!isDev && !SANITY_PREVIEW_SITE) {
    console.log("PRODUCTION MODE: No preview site url provided");
  }

  if (!document?.slug?.current || !document._type) {
    console.log("Missing or invalid slug and/or type.");
  }

  return `${BASE_URL}/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=${document?.slug?.current}&type=${document._type}`;
}
