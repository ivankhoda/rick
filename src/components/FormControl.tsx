import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FormSelect } from "./FormSelect";
import { InputFields } from "./InputFields";
import { StyledSelectContainer } from "./StyledFormSelect";
const genders = [
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
const statuses = [
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
const selects = [
  { name: "gender", id: "selectGender", label: "Gender", value: "", items: genders },
  { name: "status", id: "selectStatus", label: "Status", value: "", items: statuses },
];
const inputfFields = [
  { label: "Input name", placeholder: "Rick", id: "Name" },
  { label: "Input species", placeholder: "Human", id: "Species" },
  { label: "Input type", placeholder: "Input type", id: "Type" },
];

const StyledButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const Form = (props: { onSubmit: (event: React.FormEvent) => void }) => {
  const submit = props.onSubmit;
  return (
    <>
      <form onSubmit={submit}>
        <InputFields items={inputfFields} />
        <StyledSelectContainer>
          {selects.map((select) => (
            <FormSelect key={select.id} name={select.name} id={select.id} label={select.label} items={select.items} />
          ))}
        </StyledSelectContainer>
        <StyledButtonWrapper>
          <Button type="submit" variant="contained" color="secondary">
            SEARCH
          </Button>
        </StyledButtonWrapper>
      </form>
    </>
  );
};
