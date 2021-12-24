import React from "react";
import { MdLink as LinkIcon } from "react-icons/md";

const LinkRender: React.FC = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode[];
}) => (
  <span style={{ color: "#2d53fe" }}>
    {title ?? children} <LinkIcon />
  </span>
);

type ReferenceType = "post" | "route" | "legal" | "page";

export const internalLink = (referenceTypes: ReferenceType[]) => ({
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "link",
      type: "reference",
      title: "Link",
      to: referenceTypes.map((ref: ReferenceType) => ({
        type: ref,
      })),
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
  ],
  blockEditor: {
    icon: LinkIcon,
    render: LinkRender,
  },
});
