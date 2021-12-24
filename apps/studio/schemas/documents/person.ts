import { FiUser } from "react-icons/fi";
import { generateEmailField } from "../common/email";
import { authorFields } from "../objects/fields";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: FiUser,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    generateEmailField({
      name: "email",
      description: "The email address associated to this person",
    }),
    {
      name: "role",
      title: "Role",
      description: "Select the type of role this person has",
      type: "string",
      options: {
        list: [
          { title: "Author", value: "author" },
          { title: "Policy Manager", value: "manager" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    ...authorFields,
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare({ title = "No title", media = FiUser }) {
      return {
        title,
        media,
      };
    },
  },
};
