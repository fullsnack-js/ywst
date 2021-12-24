import { BiCalendarEvent as icon } from "react-icons/bi";

export default {
  name: "setting",
  title: "Setting",
  type: "object",
  icon,
  fields: [
    {
      name: "classType",
      title: "Class Type",
      type: "string",
      description: "Where will this be taught? Live in-person, online or a hybrid...?",
      options: {
        list: [
          { title: "Online-only", value: "online" },
          { title: "Hybrid class", value: "hybrid" },
          { title: "In-studio only", value: "studio" }
        ]
      },
      layout: "dropdown",
      validation: Rule => Rule.required()
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Name of the studio or yoga organization providing this class",
      validation: Rule => Rule.required()
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      description: "Link to the event site (e.g. registration link)",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "title", date: "date", media: "icon" },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title: title,
        subtitle: new Date(date).toLocaleString(),
        media: media,
      };
    },
  },
};
