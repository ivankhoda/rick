import { InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

type Options = {
  name: string;
  id: string;
  label: string;

  items: Item[];
};
type Item = {
  value: string;
  label: string;
};

export const FormSelect = (props: Options) => {
  const { name, id, label, items } = props;
  const [item, setItem] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value);
    setItem(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="Label">{label}</InputLabel>
      <Select name={name} id={id} value={item} label={label} onChange={handleChange}>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
