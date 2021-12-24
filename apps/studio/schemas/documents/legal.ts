import preview from "part:sanity-plugin-icon-picker/preview";
import { GoLaw } from "react-icons/go";
import { policyContact } from "../objects/fields";
export default {
  name: "legal",
  type: "document",
  title: "Legal Terms & Agreements",
  icon: GoLaw,
  __experimental_actions: [/*"create", "delete",*/ "update", "publish"],

  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },

    {
      name: "content",
      title: "Content",
      type: "blockText",
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    policyContact,
    {
      name: "last_modified",
      title: "Date Modified",
      type: "datetime",
      validation: (Rule) =>
        Rule.required("Must provide the most recent modification date."),
      codegen: { required: true },
    },
  ],
  preview: {
    select: {
      icon: "icon",
      title: "title",
    },
    prepare({ title, icon }) {
      return {
        title,
        media: preview(icon),
      };
    },
  },
};
