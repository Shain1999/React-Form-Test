import { TextField, MenuItem } from "@mui/material";
import React, { ChangeEventHandler } from "react";
export interface ISelectInputProps {
  menuItems: any[];
  labelText: string;
  placeholderText?: string;
  value: string | undefined;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  name: string;
}
export interface IMenuItem {
  label: string;
}
// this components recives an array of items,title,place holder text for guidence, value and an on change handler
// the component returns a select ddl for the given array , updating the value on change
function SelectInput(props: ISelectInputProps) {
  return (
    <>
      <label>{props.labelText}</label>
      <TextField
        name={props.name}
        select
        label={props.placeholderText}
        value={props.value}
        onChange={props.onChangeHandler}
        sx={{
          width: 470,

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8B85d6",
            },
          },
        }}
      >
        {props.menuItems.map((item: IMenuItem) => (
          <MenuItem key={item.label} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default SelectInput;
