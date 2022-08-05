import { SvgIcon, Autocomplete, TextField } from "@mui/material";
import React from "react";
import { Language } from "@mui/icons-material";

export interface ILanguageProps {
  languageValue: string;
  languageInput: string;
  setLanguageValue: React.Dispatch<React.SetStateAction<string>>;
  setLanguageInput: React.Dispatch<React.SetStateAction<string>>;
}
// this compenent is in charge of language ddl and world icon updating and showing the state
// recives the value and set value function for the language state
function LanguageIcon(props: ILanguageProps) {
  return (
    <span className="language">
      <SvgIcon component={Language} />
      <label htmlFor="languageDdl"></label>
      <Autocomplete
        clearIcon={<></>}
        id="languageDdl"
        options={["EN", "HE"]}
        sx={{
          width: 50,
          height: 50,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
          marginTop: 1,
        }}
        renderInput={(params) => <TextField {...params} label="" />}
        size="small"
        value={props.languageValue}
        onChange={(event: any, newValue: any) => {
          props.setLanguageValue(newValue);
        }}
        inputValue={props.languageInput}
        onInputChange={(event, newInputValue) => {
          props.setLanguageInput(newInputValue);
        }}
      />
    </span>
  );
}

export default LanguageIcon;
