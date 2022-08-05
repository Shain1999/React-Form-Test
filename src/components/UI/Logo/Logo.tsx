import React from "react";
import logo from "../../../assests/imgs/logo.png";

// this component shows the logo
function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
