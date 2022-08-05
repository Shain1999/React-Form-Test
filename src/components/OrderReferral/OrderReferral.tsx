import React from "react";
import { IUserData } from "../../App";
import Logo from "../UI/Logo/Logo";
import Title from "../UI/Title/Title";
import UserInfoRow from "../UI/UserInfoRow/UserInfoRow";
import "./orderReferral.scss";
import QR from "../../assests/imgs/QRCode.png";


import Button from "../UI/Button/Button";
import ListInstruction from "../UI/ListInstruction/ListInstruction";

function OrderReferral(props: IUserData) {
  const onDownloadClicked = () => {
    alert("downloaded");
  };
  const today = new Date();
  const dateToShow = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
  return (
    <>
      <div className="OrderReferral">
        <Logo />
        <Title text="Order Referral" />
        <article className="userData">
          <UserInfoRow propText="Registration Date:" propValue={dateToShow} />
          <UserInfoRow propText="Name Of Patient:" propValue={props.fullName} />
          <UserInfoRow propText="Age:" propValue={props.age} />
        </article>
        <div className="controlBtn">
          <Button
            btnValue="Download Referral"
            onClickHandler={onDownloadClicked}
          />
        </div>
        <img src={QR} alt="" />
        <ListInstruction/>
      </div>
    </>
  );
}

export default OrderReferral;
