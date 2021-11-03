import { InputLabel } from "@material-ui/core";
import React from "react";
import { StyledSelect, StyledSelectContainer } from ".";

type Options = {
  name: string;
  id: string;
  label: string;
  items: Item[];
};
type Item = {
  value: string | undefined;
  label: string;
};

export const FormSelect = (props: Options) => {
  const { name, id, label, items } = props;
  const [item, setItem] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItem(event.target.value as string);
  };

  return (
    <StyledSelectContainer>
      <InputLabel id="Label">{label}</InputLabel>
      <StyledSelect name={name} id={id} value={item} onChange={handleChange}>
        {items.map((item) => (
          <option key={item.label} value={item.value}>
            {item.value}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
};
