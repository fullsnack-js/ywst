import { GrCircleQuestion } from "react-icons/gr";

export default {
  title: "FAQs",
  name: "faqs",
  type: "object",
  icon: GrCircleQuestion,
  fields: [
    {
      name: "title",
      title: "FAQ Title",
      type: "string",
    },
    {
      name: "items",
      type: "array",
      of: [{ type: "faqItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "FAQs" }) {
      return {
        title: `${title}`,
        subtitle: "FAQ section",
      };
    },
  },
};
