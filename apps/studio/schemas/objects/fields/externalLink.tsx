import React from "react";
import {
  FaExternalLinkAlt as ExternalLinkIcon,
  FaGlobe as GlobeIcon,
} from "react-icons/fa";

const LinkRender: React.FC = ({
  title,
  children,
  blank,
}: {
  title?: string;
  children: React.ReactNode;
  blank: boolean;
}) => (
  <span style={{ color: "#2d53fe" }}>
    {title ?? children} <GlobeIcon />
    {blank && <ExternalLinkIcon />}
  </span>
);

export const externalLink = {
  name: "externalLink",
  title: "External Link",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    },
    {
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) => [
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
        Rule.required(),
      ],
      codegen: { required: true },
    },
  ],
  blockEditor: {
    icon: GlobeIcon,
    render: LinkRender,
  },
};
