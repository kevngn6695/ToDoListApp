import "../assets/style/css/components/custommenusymbol.css";

import React from "react";

function CustomMenuSymbol(props) {
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

export default React.memo(CustomMenuSymbol);
