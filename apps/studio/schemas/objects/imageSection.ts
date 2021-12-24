import { FaRegImage } from "react-icons/fa";

export default {
  type: "object",
  name: "imageSection",
  title: "Image with Text",
  icon: FaRegImage,
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "text",
      type: "simpleBlock",
      title: "Text",
    },
    {
      name: "image",
      title: "Selected Image",
      type: "accessibleImage",
      description: "Optional caption",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      description: "The caption text (optional)",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      image: "image.image",
      caption: "caption",
    },
    prepare({ heading, image, caption }) {
      return {
        title: `${heading}`,
        subtitle: caption || "[No caption]",
        media: image,
      };
    },
  },
};
