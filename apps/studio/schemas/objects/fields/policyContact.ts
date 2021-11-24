export const policyContact = {
  name: "contact",
  title: "Policy Contact Information",
  description: "Required person responsible for managing policy inquiries",
  type: "reference",
  to: [{ type: "person" }],
  options: {
    filter: "role == $role",
    filterParams: { role: "manager" },
  },
  validation: (Rule) => Rule.required("Must provide a contact person."),
  codegen: { required: true },
};
