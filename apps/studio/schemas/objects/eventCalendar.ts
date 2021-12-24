export default {
  name: "eventCalendar",
  type: "object",
  title: "Calendar Information",
  description:
    "Select the calendar that manages the event and enter the associated ID. Please make sure that the calendar has been set to public!",
  options: {
    columns: 2,
  },
  fields: [
    {
      name: "app",
      title: "Calendar App",
      type: "string",
      options: {
        list: [
          { title: "Google Calendar", value: "google" },
          { title: "Apple iCal", value: "apple" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "calendarId",
      type: "string",
      title: "Calendar ID",
    },
  ],
};
