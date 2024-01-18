import "../assets/style/css/components/custombutton.css";

import React from "react";

function CustomButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default React.memo(CustomButton);
