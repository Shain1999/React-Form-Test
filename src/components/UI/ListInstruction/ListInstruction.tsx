import React from "react";
import "./ListInstruction.scss";
function ListInstruction() {
  return (
    <div className="instructionListDiv">
      <ul className="instructionList">
        <li>
          Please present the referral with a valid identification document
        </li>
        <li>
          This referral is intended for single use and only for the registered
          person named above
        </li>
        <li>The referral can be printed or displayed digitally</li>
      </ul>
    </div>
  );
}
export default ListInstruction;
