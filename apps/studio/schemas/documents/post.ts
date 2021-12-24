import { ImBlog } from "react-icons/im";
import { generateSlugField } from "../common/slug";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: ImBlog,
  initialValue: () => ({
    hidden: false,
    author: {
      _type: "reference",
      _ref: "2d0f159b-741c-4301-8a2d-0849014a31dc",
    },
  }),
  fieldsets: [
    { name: "info", title: "Info" },
    { name: "content", title: "Content" },
  ],
  fields: [
    {
      fieldset: "info",
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(50)
          .warning("Longer titles may be truncated by search engines")
          .required("Title is required"),
      codegen: { required: true },
    },
    {
      fieldset: "info",
      ...generateSlugField({
        name: "slug",
        source: "title",
        maxLength: 60,
      }),
    },
    {
      fieldset: "info",
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
      options: {
        filter: "role == $role",
        filterParams: { role: "author" },
      },
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      fieldset: "content",
      name: "mainImage",
      title: "Main Image",
      type: "accessibleImage",
      validation: (Rule) =>
        Rule.required("This image will be featured prominently with the post"),
      codegen: { required: true },
    },

    {
      fieldset: "info",
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      options: {
        layout: "tags",
      },
      validation: (Rule) =>
        Rule.required("1-3 categories are a helpful amount to readers"),
      codegen: { required: true },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description:
        "By default, is set to the current time. Can schedule the post to be displayed at a later date and time.",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      fieldset: "content",
      name: "content",
      title: "Content",
      type: "blockContent",
      validation: (Rule) => Rule.required("Posts cannot be blank"),
      codegen: { required: true },
    },
    {
      name: "tags",
      title: "Post Search Tags",
      type: "tags",
      description: "Keywords for search engines",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "excerpt",
      type: "text",
      rows: 3,
      title: "Excerpt",
      validation: (Rule) => Rule.min(40).max(100).required(),
    },
    {
      name: "hidden",
      title: "Hide this post?",
      type: "boolean",
      description: "Turn this on to hide it from the public and bots.",
    },
    {
      title: "SEO",
      name: "seo",
      description:
        "OPTIONAL: If you want to override the default settings for this post, update any of the fields below.",
      type: "seo",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author && `by ${author}`,
        media,
      };
    },
  },
};
