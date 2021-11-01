export const genders = [
  {
    value: "",
    label: "None",
  },
  {
    value: "female",
    label: "female",
  },
  {
    value: "male",
    label: "male",
  },
  {
    value: "genderless",
    label: "genderless",
  },
  {
    value: "unknown",
    label: "unknown",
  },
];
export const statuses = [
  {
    value: "",
    label: "None",
  },
  {
    value: "alive",
    label: "alive",
  },
  {
    value: "dead",
    label: "dead",
  },
  {
    value: "unknown",
    label: "unknown",
  },
];
export const selects = [
  { name: "gender", id: "selectGender", label: "Gender", value: "", items: genders },
  { name: "status", id: "selectStatus", label: "Status", value: "", items: statuses },
];
export const inputfFields = [
  { label: "Input name", placeholder: "Rick", id: "Name" },
  { label: "Input species", placeholder: "Human", id: "Species" },
  { label: "Input type", placeholder: "Input type", id: "Type" },
];
