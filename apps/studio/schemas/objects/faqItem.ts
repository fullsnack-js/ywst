import { FaQuestionCircle } from "react-icons/fa";

export default {
  name: "faqItem",
  type: "object",
  title: "Q & A",
  icon: FaQuestionCircle,
  fields: [
    {
      name: "question",
      type: "string",
      title: "Question",
      validation: (Rule) => Rule.error("Empty FAQ question.").required(),
    },
    {
      name: "answer",
      type: "simpleBlock",
      title: "Answer",
      validation: (Rule) => Rule.error("Empty FAQ answer.").required(),
    },
  ],
  preview: {
    select: {
      title: "question",
    },
  },
};
