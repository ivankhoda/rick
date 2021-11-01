import { Button } from "@material-ui/core";
import styled from "styled-components";
import { inputfFields, selects } from "../data";
import { FormSelect } from "./FormSelect";
import { InputFields } from "./InputFields";
import { StyledSelectContainer } from "./StyledFormSelect";

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
