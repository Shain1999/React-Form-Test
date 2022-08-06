import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  SvgIcon,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./registrationForm.scss";
import logo from "../../assests/imgs/logo.png";
import { Language } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import LanguageIcon from "../UI/Language/Language";
import Inputs from "../UI/Inputs/Inputs";
import SocialNumberInput from "../UI/SocialNumberInput/SocialNumberInput";
import BirthDate from "../UI/BirthDate/BirthDate";
import SelectInput from "../UI/SelectInput/SelectInput";
import PhoneNumber from "../UI/PhoneNumber/PhoneNumber";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import Logo from "../UI/Logo/Logo";
import { IUserData } from "../../App";
export interface IRegistrationFormProps {
  setRegisterCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}
export interface IDateOfBirth {
  day: number;
  mounth: number;
  year: number;
}
export interface IUserRegistrationData {
  firstName?: string;
  lastName?: string;
  socialNumber?: number;
  dateOfBirth?: IDateOfBirth;
  reasonForArrival?: string;
  phoneNumber?: number;
  HMO?: string;
  city?: string;
}

function RegistrationForm(props: IRegistrationFormProps) {
  // defining user data
  const [userData, setUserData] = useState<IUserRegistrationData>();
  useEffect(() => {
    // init birthdate to empty obj beacuse it did some bugs
    let emptyBirthObj = { day: 0, mounth: 0, year: 0 };
    setUserData((prev) => ({ ...prev, dateOfBirth: emptyBirthObj }));
  }, []);
  // defining all states that arent user data
  const [socialNumberType, setSocialNumberType] = useState<string>("ID");
  const [language, setLanguage] = useState<string>("EN");
  const [languageInput, setLanguageInput] = useState<string>("EN");
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  // defining all err messages
  const [errMessageFirstName, setErrMessageFirstName] = useState<string>("");
  const [errMessageLastName, setErrMessageLastName] = useState<string>("");
  const [errMessageSocialNumber, setErrMessageSocialNumber] =
    useState<string>("");

  // this function calculate the age of the user
  const calcAge = () => {
    let today = new Date();
    let userYear = userData?.dateOfBirth?.year;
    let userMounth = userData?.dateOfBirth?.mounth;
    if (userYear && userMounth) {
      let age = today.getFullYear() - userYear;
      if (today.getMonth() < userMounth) {
        age--;
      }
      return age;
    }
  };
  // this function returns the full name
  const getFullName = () => userData?.firstName + " " + userData?.lastName;

  // this function check if the the user filled all the data currectly and then route to the order referral page
  const onSubmitClick = () => {
    if (
      !termsChecked &&
      errMessageFirstName == "" &&
      errMessageLastName == "" &&
      errMessageSocialNumber == ""
    ) {
      alert("must accept terms");
      return;
    }

    const userDataToSend: any = {
      fullName: getFullName(),
      age: calcAge(),
    };

    props.setUserData(userDataToSend);
    props.setRegisterCompleted(true);
  };

  // validation functions for strings
  function onlyLetters(str: string) {
    return /^[a-zA-Z' ']+$/.test(str);
  }

  function onlyNumbers(str: string) {
    return /^[0-9]+$/.test(str);
  }
  const onChangeHandlerUserData = (e: any) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // on change handler for the 1st name input ,updating the state and showing errors
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onlyLetters(event.target.value)) {
      if (errMessageFirstName != "") {
        setErrMessageFirstName("");
      }
      onChangeHandlerUserData(event);
    } else {
      setErrMessageFirstName("only letters");
    }
  };

  // on change handler for the last name input,updating the state and showing errors
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyLetters(event.target.value)) {
      if (errMessageLastName != "") {
        setErrMessageLastName("");
      }
      onChangeHandlerUserData(event);
    } else {
      setErrMessageLastName("only letters");
    }
  };

  // on change handler for the social number input,updating the state and showing errors
  const handleSocialNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onlyNumbers(event.target.value)) {
      if (errMessageSocialNumber != "") {
        setErrMessageSocialNumber("");
      }
      onChangeHandlerUserData(event);
    } else {
      setErrMessageSocialNumber("only numbers");
    }
  };

  // on change handler for the radio buttons that updates the value
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialNumberType((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <article className="container">
        <LanguageIcon
          languageInput={languageInput}
          languageValue={language}
          setLanguageInput={setLanguageInput}
          setLanguageValue={setLanguage}
        />
        <Logo></Logo>
        <Title text="Registration Form" />
        <form action="">
          <div className="inputs">
            <Inputs
              name="firstName"
              errorMessage={errMessageFirstName}
              onChangeHandler={handleFirstNameChange}
              labelText="First Name"
            />
          </div>
          <div className="inputs">
            <Inputs
              name="lastName"
              errorMessage={errMessageLastName}
              onChangeHandler={handleLastNameChange}
              labelText="Last Name"
            />
          </div>
          <div className="inputs">
            <SocialNumberInput
              errMessage={errMessageSocialNumber}
              labelText={socialNumberType}
              onInputChangeHandler={handleSocialNumberChange}
              onRadioChangeHandler={handleRadioChange}
            />
          </div>
          <div className="inputs">
            <BirthDate
              setUserData={setUserData}
              daysValue={userData?.dateOfBirth?.day}
              mounthsValue={userData?.dateOfBirth?.mounth}
              yearsValue={userData?.dateOfBirth?.year}
              labelText="Date Of Birth"
            ></BirthDate>
          </div>
          <div className="inputs">
            <SelectInput
              name="reasonForArrival"
              labelText="Reason for arrival for examination"
              placeholderText="choose reason for arrival"
              menuItems={reasonForArrivalArray}
              value={userData?.reasonForArrival}
              onChangeHandler={onChangeHandlerUserData}
            />
          </div>
          <div className="inputs">
            <PhoneNumber name="phone" setUserData={setUserData} />
          </div>
          <div className="inputs">
            <SelectInput
              name="HMO"
              labelText="HMO"
              menuItems={HMOdata}
              value={userData?.HMO}
              onChangeHandler={onChangeHandlerUserData}
            />
          </div>
          <div className="inputs">
            <SelectInput
              name="city"
              labelText="City"
              menuItems={cityData}
              value={userData?.city}
              onChangeHandler={onChangeHandlerUserData}
            />
          </div>
          <div className="authTermsDiv">
            <input
              type="checkbox"
              name=""
              id="termsCheckBox"
              checked={termsChecked}
              onChange={() => {
                setTermsChecked(!termsChecked);
              }}
            />
            <p className="termsData">
              I authorize the sampling company to send me the test results based
              on the information entered upon registration.
            </p>
          </div>
          <div className="btnControlDiv">
            <Button btnValue="Continue" onClickHandler={onSubmitClick} />
          </div>
        </form>
      </article>
    </>
  );
}
const reasonForArrivalArray = [
  { label: "reason 1" },
  { label: "reason 2" },
  { label: "reason 3" },
  { label: "reason 4" },
  { label: "i dont know what to write" },
  { label: "yarok ole" },
];
const cityData = [
  { label: "Tel-Aviv" },
  { label: "Haifa" },
  { label: "Rishon-Lezion" },
  { label: "Yoqneam-Illit" },
  { label: "Hagor" },
  { label: "Harish" },
];
const HMOdata = [
  { label: "Clalit" },
  { label: "Macabbi" },
  { label: "Leomit" },
  { label: "Meohedet" },
];
interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
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
export default RegistrationForm;
