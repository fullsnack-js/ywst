// https://github.com/waspeer/greet-mertens/blob/5ff499ccf2/web/src/lib/helpers/get-sanity-file-download-url.ts

import { SanityAsset } from "@sanity/image-url/lib/types/types";

const SANITY_CDN_BASE_URL = "https://cdn.sanity.io/";
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_PROJECT = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

/**
 * Creates a download URL from a Sanity file reference
 *
 * @param {{
 *  _ref: string;
 *  _type: 'reference';
 * }} asset
 * @param {string} title
 * @returns {string}
 */

export function resolveSanityFileUrl(
  asset: SanityAsset,
  title: string
): string {
  const matches = asset._ref.match(/file-(?<id>\w+)-(?<extension>\w+)/);

  if (!matches) {
    throw new Error("Invalid file reference");
  }

  const { id, extension } = matches.groups;

  return new URL(
    `/files/${SANITY_PROJECT}/${SANITY_DATASET}/${id}.${extension}?dl=${title}.${extension}`,
    SANITY_CDN_BASE_URL
  ).toString();
}
