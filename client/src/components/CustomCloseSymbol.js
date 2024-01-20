import React from "react";

import "../assets/style/css/components/customclosesymbol.css";

function CustomCloseSymbol(props) {
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

export default React.memo(CustomCloseSymbol);
