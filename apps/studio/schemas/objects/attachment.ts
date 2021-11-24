import { FaPaperclip } from "react-icons/fa";

export const attachment = {
  name: "attachment",
  type: "file",
  title: "Attachment",
  blockEditor: {
    icon: FaPaperclip,
  },
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
};
