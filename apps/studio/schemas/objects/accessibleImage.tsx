import React from "react";
import { MdImage } from "react-icons/md";

export default {
  name: "accessibleImage",
  type: "object",
  title: "Accessible Image",
  icon: MdImage,
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      description:
        "The original image file. The higher the resolution, the better.",
      fields: [
        {
          name: "source",
          type: "string",
          hidden: ({ parent }) => !parent?.asset,
          title: "Image Source",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.optional(),
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description:
            "Used to describe the contents of the image to assistive technology",
          hidden: ({ parent }) => !parent?.asset,
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
          codegen: { required: true },
        },
      ],
      options: {
        hotspot: true,
        storeOriginalFilename: false,
        metadata: ["palette"],
        accept: ".png, .jpg, .jpeg",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      alt: "image.alt",
      url: "image.asset.url",
    },
    prepare({ alt = "No alternative text set", url }) {
      return {
        title: alt,
        media: <img src={url} alt={alt} />,
      };
    },
  },
};
