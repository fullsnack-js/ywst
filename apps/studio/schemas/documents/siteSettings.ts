import { generateEmailField } from "./../common/email";
/* eslint-disable no-useless-escape */
import { FiSettings } from "react-icons/fi";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: FiSettings,
  __experimental_actions: [/*"create",*/ "update", "publish"],
  fieldsets: [{ name: "navigation", title: "Site Navigation" }],
  fields: [
    {
      name: "title",
      title: "Website title",
      type: "string",
    },
    generateEmailField({
      name: "contactEmail",
      title: "Contact Email",
      description: "Reply email for website contact page",

      // fieldset: undefined,
    }),
    {
      fieldset: "navigation",
      title: "Main navigation",
      name: "mainNav",
      type: "array",
      description:
        "Drag and drop items to represent the display order on the website main navigation",

      of: [{ type: "navigationItem" }],
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      fieldset: "navigation",
      title: "Footer navigation",
      name: "footerNav",
      type: "array",
      description:
        "Drag and drop items to represent the display order on the website footer navigation",

      of: [{ type: "navigationItem" }],
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },

    {
      name: "socials",
      title: "Social Media Accounts",
      type: "array",
      of: [{ type: "social" }],
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      title: "Default SEO",
      name: "seo",
      type: "seo",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
  ],
};
