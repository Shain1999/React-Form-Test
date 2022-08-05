import React, { ChangeEventHandler, MouseEventHandler } from "react";
import "./button.scss"
export interface IButton {
  btnValue: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}
// this component recives title and an onclick hander
// the component returns a button element with given title and when its clicked the given on click function fires
function Button(props: IButton) {
  return (
    <button className="submitBtn" type="submit" onClick={props.onClickHandler}>
      {props.btnValue}
    </button>
  );
}

export default Button;
