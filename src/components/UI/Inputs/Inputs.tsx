import { TextField } from "@mui/material";
import React, { ChangeEventHandler, useState } from "react";
export interface IInputProps {
  labelText: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  errorMessage: string;
}
// this component recives a text to show , on change handler for he input , and err message
// this component returns a input field with desired props
function Inputs(props: IInputProps) {
  return (
    <>
      <label htmlFor="">{props.labelText}</label>
      <TextField
        error={props.errorMessage == "" ? false : true}
        color="secondary"
        helperText={props.errorMessage}
        sx={{
          width: 470,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8B85d7",
            },
          },
        }}
        onChange={props.onChangeHandler}
      ></TextField>
    </>
  );
}

export default Inputs;
