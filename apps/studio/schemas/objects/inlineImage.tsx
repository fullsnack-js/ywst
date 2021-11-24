export default {
  name: "inlineImage",
  title: "Inline Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true, crop: true },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      description:
        "Optional. If provided, caption will be displayed underneath the image.",
      hidden: ({ parent }) => !parent?.asset,
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
      description:
        "Required: A brief description of image for accessability (1-5 words)",
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      media: "image",
      title: "caption",
    },
    prepare({ title = "No caption or alternative text set", media }) {
      return {
        title,
        media,
      };
    },
  },
};
