import "../assets/style/css/components/custombutton.css";

import React from "react";

import { CustomButtonProps } from "../utils/propType";

function CustomButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

CustomButton.propTypes = CustomButtonProps;

export default React.memo(CustomButton);
