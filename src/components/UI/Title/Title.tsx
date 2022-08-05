import React from "react";
import "./title.scss"
export interface ITitle{
  text:string
}
// this component shows the title of the form
function Title(props:ITitle) {
  return <h1 className="title">{props.text}</h1>;
}

export default Title;
