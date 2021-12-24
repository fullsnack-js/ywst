import { GrDocumentPdf } from "react-icons/gr";
import * as React from "react";
const FileRender: React.FC = ({
  name,
  text,
  children,
}: {
  name?: string;
  text?: string;
  children: React.ReactNode;
}) => {
  return (
    <span style={{ color: "#2d53fe" }}>
      {text ?? children} <GrDocumentPdf />
    </span>
  );
};
export default {
  name: "attachment",
  title: "Attachment",
  icon: GrDocumentPdf,
  type: "file",
  fields: [
    {
      name: "name",
      title: "File name",
      type: "string",
      validation: (Rule) => Rule.required("Add name in File -> Edit Details"),
    },
    {
      name: "text",
      title: "Link display text",
      type: "string",
      description:
        "Text to display in the link. Default will be the highlighted text.",
    },
  ],
  options: {
    storeOriginalFilename: true,
  },
  validation: (Rule) => Rule.required(),
  blockEditor: {
    icon: GrDocumentPdf,
    render: FileRender,
  },
};
