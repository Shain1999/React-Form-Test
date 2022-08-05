import { Autocomplete, Box, TextField } from "@mui/material";
import React, { ChangeEventHandler, useState } from "react";

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface IPhoneNumberProps {
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}
// this component recives an set function for the phone number state
// the component returns one ddl filled with postal code number and one input for the user to insert their number
function PhoneNumber(props: IPhoneNumberProps) {
  const [errMessagePhoneNumber, setErrMessagePhoneNumber] =
    useState<string>("");
    function onlyNumbers(str:string) {
      return /^[0-9]+$/.test(str);
    }
  const [valuePostal, setValuePostal] = useState<CountryType>({
    code: "IL",
    label: "Israel",
    phone: "972",
  });

  return (
    <>
      <label htmlFor="">Phone</label>
      <div className="autoCompleteControlDiv">
        <Autocomplete
          id="country-select-demo"
          sx={{
            width: 150,

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#8B85d6",
              },
            },
            marginRight: 1,
          }}
          options={countries}
          autoHighlight
          onChange={(e: any, value: any) => {
            setValuePostal(value.phone);
          }}
          getOptionLabel={(option) => option.phone}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              sx={{ width: 150 }}
              {...params}
              label=""
              inputProps={{
                ...params.inputProps,
                // disable autocomplete and autofill
              }}
            />
          )}
        />
        <TextField
          error={errMessagePhoneNumber == "" ? false : true}
          helperText={errMessagePhoneNumber}
          label="enter phone"
          sx={{
            width: 313,

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#8B85d6",
              },
            },
          }}
          onChange={(e: any) => {
            if (onlyNumbers(e.target.value)) {
              if (errMessagePhoneNumber != "") {
                setErrMessagePhoneNumber("");
              }
              props.setPhoneNumber(`+${valuePostal}${e.target.value}`);
            } else {
              setErrMessagePhoneNumber("only numbers");
            }
          }}
        ></TextField>
      </div>
    </>
  );
}
const countries: readonly CountryType[] = [
  { code: "IL", label: "Israel", phone: "972" },
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
];
export default PhoneNumber;
