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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value);
    setValue(event.target.value as string);
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
