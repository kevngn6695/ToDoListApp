import "../assets/style/css/components/customclosesymbol.css";

import React from "react";

function CustomCloseSymbol(props) {
  return (
    <>
      <span className={props.className}></span>
      <span className={props.className}></span>
    </>
  );
}

export default React.memo(CustomCloseSymbol);
