import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEventHandler } from "react";

export interface IBirthDateProps {
  labelText: string;
  daysValue: number;
  mounthsValue: number;
  yearsValue: number;
  handleDaysChange: ChangeEventHandler<HTMLInputElement>;
  handleMounthsChange: ChangeEventHandler<HTMLInputElement>;
  handleYearsChange: ChangeEventHandler<HTMLInputElement>;
}
// this component recives days mounths and years state value,on change handler for each value,and a title
// the component returns 3 ddl for the user to fill his birth date

function BirthDate(props: IBirthDateProps) {
  let daysLabels = new Array();
  let mounthLabels = new Array();
  let yearsLabels = new Array();
  for (let i = 1; i < 32; i++) {
    daysLabels.push(i.toString());
  }
  for (let i = 1; i < 13; i++) {
    mounthLabels.push(i.toString());
  }
  for (let i = 1948; i < 2023; i++) {
    yearsLabels.push(i.toString());
  }
  return (
    <>
      <label>{props.labelText}</label>
      <div className="ddlControl">
        <TextField
          select
          label="dd"
          value={props.daysValue}
          onChange={props.handleDaysChange}
          sx={{
            width: 150,

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#8B85d6",
              },
            },
          }}
        >
          {daysLabels.map((day) => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="mm"
          value={props.mounthsValue}
          onChange={props.handleMounthsChange}
          sx={{
            width: 150,

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#8B85d6",
              },
            },
          }}
        >
          {mounthLabels.map((mounth) => (
            <MenuItem key={mounth} value={mounth}>
              {mounth}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="yy"
          value={props.yearsValue}
          onChange={props.handleYearsChange}
          sx={{
            width: 150,

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#8B85d6",
              },
            },
          }}
        >
          {yearsLabels.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </>
  );
}

export default BirthDate;
