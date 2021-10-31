import { TextField } from "@material-ui/core";
import React from "react";

type Options = {
  items: Item[];
};
type Item = {
  label: string;
  placeholder: string;
  id: string;
};

export const InputFields = (props: Options) => {
  const { items } = props;
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    let value = event.target.value;

    setValue(value);
  };

  return (
    <>
      {items.map((item) => (
        <TextField
          key={item.id}
          placeholder={item.placeholder}
          id={item.id}
          defaultValue={value}
          onChange={handleChange}
        />
      ))}
    </>
  );
};
