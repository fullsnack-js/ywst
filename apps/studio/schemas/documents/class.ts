import { GrYoga } from "react-icons/gr";
// import eventCalendar from "../objects/eventCalendar";
export default {
  name: "class",
  title: "Class",
  type: "document",
  icon: GrYoga,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required("Must provide a class name."),
      codegen: { required: true },
    },
    {
      name: "level",
      title: "Level",
      type: "string",
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required("Must provide a level for prospective yoga students"),
    },
    {
      name: "description",
      title: "Class Description",
      type: "text",
      rows: 3,
      codegen: { required: true },
      validation: (Rule) =>
        Rule.required("Must provide a short description for web viewers"),
    },
    {
      name: "eventCalendar",
      type: "eventCalendar",
      validation: (Rule) =>
        Rule.required("Must provide a calendar event that manages this class."),
      codegen: { required: true },
    },
    {
      name: "setting",
      type: "setting",
      validation: (Rule) =>
        Rule.required("Must provide a setting for this class."),
      codegen: { required: true },
    },
  ],
};
