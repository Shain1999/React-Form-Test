import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { ChangeEventHandler } from "react";
import Inputs from "../Inputs/Inputs";
export interface ISocialNuberInputProps {
  labelText: string;
  onInputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onRadioChangeHandler: ChangeEventHandler<HTMLInputElement>;
  errMessage: string;
}
// this component recives both input and radio on change handlers , title, and err message
// the component returns an input with 2 radio buttons.
//  each one changes the social number type
function SocialNumberInput(props: ISocialNuberInputProps) {
  return (
    <>
      <Inputs
      name="socialNumber"
        errorMessage={props.errMessage}
        labelText={props.labelText}
        onChangeHandler={props.onInputChangeHandler}
      />

      <FormControl>
        <RadioGroup
          row={true}
          aria-labelledby="controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={props.labelText}
          onChange={props.onRadioChangeHandler}
          // sx={{ ".Mui-checked": { color: "#8B85e7" } }}
        >
          <FormControlLabel
            value="ID"
            control={<Radio sx={{ "&.Mui-checked": { color: "#8B85e7" } }} />}
            label="ID"
          />
          <FormControlLabel
            value="Passport"
            control={<Radio sx={{ "&.Mui-checked": { color: "#8B85e7" } }} />}
            label="Passport"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default SocialNumberInput;
