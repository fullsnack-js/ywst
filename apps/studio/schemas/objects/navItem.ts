import { GrNavigate } from "react-icons/gr";
import { internalLink, externalLink } from "./fields";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: GrNavigate,
  fieldsets: [
    {
      name: "navigation",
      title: "Navigation",
    },
  ],

  fields: [
    {
      name: "navLink",
      title: "Navigation Item URL",
      type: "object",
      icon: GrNavigate,
      options: {
        columns: 2,
      },
      fields: [
        {
          title: "Select the type of link",
          description:
            "External links go to other websites using the format `https://www.google.com`. Internal links are restricted to YWST pages.",
          name: "linkType",
          type: "string",
          options: {
            list: [
              { title: "External", value: "external" },
              { title: "Internal", value: "internal" },
            ],
            layout: "radio",
          },
        },
        {
          ...internalLink(["route"]),
          hidden: ({ parent }) => parent?.linkType !== "internal",
        },
        {
          ...externalLink,
          hidden: ({ parent }) => parent?.linkType !== "external",
        },
      ],
    },
  ],
  preview: {
    select: {
      linkType: "navLink.linkType",
      external: "navLink.externalLink.title",
      internal: "navLink.internalLink.title",
    },
    prepare({ linkType, external, internal }) {
      return {
        title: `${linkType === "external" ? external : internal}`,
        subtitle: linkType,
      };
    },
  },
};
