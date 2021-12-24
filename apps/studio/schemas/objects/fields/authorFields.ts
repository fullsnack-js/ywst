import { generateSlugField } from "../../common/slug";

export const authorFields = [
  {
    ...generateSlugField({ name: "slug", source: "name", maxLength: 60 }),
    hidden: ({ parent }) => parent?.role !== "author",
    validation: (Rule) => Rule.optional(),
  },
  {
    name: "image",
    title: "Image",
    type: "accessibleImage",
    hidden: ({ parent }) => parent?.role !== "author",
    options: {
      hotspot: true,
    },
  },
  {
    name: "bio",
    title: "Bio",
    type: "simpleBlock",
    hidden: ({ parent }) => parent?.role !== "author",
  },
];
