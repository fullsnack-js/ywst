// https://github.com/ciampo/offbeat-appetite-sanity/blob/master/schemas/common/slug.js

import slugify from "slugify";

type SlugArgs = {
  name: string;
  source: string;
  maxLength: number;
  prefix?: string;
};
type FormatArgs = Pick<SlugArgs, "maxLength" | "prefix"> & { input: string };

function formatSlug({ input, maxLength, prefix }: FormatArgs): string {
  const slug = slugify(input, { lower: true }).slice(0, maxLength);
  return prefix ? `${prefix}/${slug}` : slug;
}

export const generateSlugField = ({
  name = "slug",
  source = "title",
  maxLength = 100,
  prefix,
}: SlugArgs) => ({
  name,
  type: "slug",
  title: "Slug",
  description:
    "⚠️ CHANGING THE SLUG OF AN EXISTING DOCUMENT IS USUALLY A BAD IDEA. Speak to the admin / developer before doing so",
  options: {
    source,
    slugify: (input: string) => formatSlug({ input, maxLength, prefix }),
  },
  validation: (Rule) => Rule.required(),
});
