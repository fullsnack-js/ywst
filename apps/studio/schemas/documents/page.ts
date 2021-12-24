import preview from "part:sanity-plugin-icon-picker/preview";
import { MdWeb } from "react-icons/md";
export default {
  name: "page",
  type: "document",
  title: "Pages",
  icon: MdWeb,
  fieldsets: [
    {
      name: "heading",
      title: "Page Heading",
    },
  ],
  fields: [
    {
      name: "pageId",
      title: "Page Id",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: "heading",
      name: "title",
      title: "Heading",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    {
      fieldset: "heading",
      name: "tagline",
      title: "Subheading",
      type: "simpleBlock",
      description: "Optional tagline displayed under heading",
      validation: (Rule) =>
        Rule.max(150).warning(
          "Taglines should be short and only add context to the title"
        ),
    },

    {
      name: "content",
      title: "Page Sections",
      description:
        "Drag and drop sections to represent layout order on website.",
      type: "array",
      of: [
        { type: "textSection" },
        { type: "imageSection" },
        { type: "faqs" },
        // { type: "cta" },
      ],
    },
    {
      name: "seo",
      title: "SEO / Share Settings",
      type: "seo",
    },
  ],
  preview: {
    select: {
      icon: "icon",
      title: "title",
    },
    prepare({ title, icon }) {
      return {
        title,
        media: preview(icon),
      };
    },
  },
};
