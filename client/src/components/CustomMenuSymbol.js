import "../assets/style/css/components/custommenusymbol.css";

import React from "react";

function CustomMenuSymbol(props) {
  return (
    <>
      <span className={props.className}></span>
      <span className={props.className}></span>
      <span className={props.className}></span>
    </>
  );
}

export default React.memo(CustomMenuSymbol);
