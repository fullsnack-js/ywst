import { FiHash } from "react-icons/fi";
import { generateSlugField } from "../common/slug";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: FiHash,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description:
        "The description displayed throughout the site under the category name",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "accessibleImage",
      description: "The main image displayed on the category page",
      validation: (Rule) => Rule.required(),
    },
    generateSlugField({
      name: "slug",
      source: "title",
      maxLength: 20,
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: `/${slug}`,
      };
    },
  },
};
