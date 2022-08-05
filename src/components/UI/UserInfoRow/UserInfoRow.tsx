import React from "react";
import "./userInfoRow.scss";
export interface IUserInfoRow {
  propText: string;
  propValue: string | number;
}

function UserInfoRow(props: IUserInfoRow) {
  return (
    <div className="userInfoDiv">
      <label className="propText">{props.propText}</label>
      <p className="propValue">{props.propValue}</p>
    </div>
  );
}

export default UserInfoRow;
