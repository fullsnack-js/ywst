import { GrDocumentText } from "react-icons/gr";

export default {
  type: "object",
  name: "textSection",
  title: "Text",
  icon: GrDocumentText,
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      description:
        "Optional heading for the text section. Leave out if heading should be the above page heading",
    },
    {
      name: "text",
      type: "blockText",
      title: "Text",
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading = "Body" }) {
      return {
        title: `${heading}`,
        subtitle: "Text section",
      };
    },
  },
};
