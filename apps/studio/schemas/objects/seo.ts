export default {
  name: "seo",
  title: "SEO & metadata",
  type: "object",
  options: { collapsible: true, collapsed: false },
  isHighlighted: true,
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines and are not recommended."
        ),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "This ends up on summary pages, Google, whenever people share your post in social media...",
      validation: (Rule) =>
        Rule.max(150)
          .warning("Longer descriptions may be truncated by search engines")
          .required(),
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "tags",
      description: "Keywords for search engines",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "metaImage",
      title: "Meta Image",
      type: "image",
      description:
        "A share image will be cropped to 1200x630. This will be used as the default sharing image if any pages do not include one.",
    },
    {
      title: "Favicon",
      name: "favicon",
      type: "image",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "SEO Settings",
      };
    },
  },
};
