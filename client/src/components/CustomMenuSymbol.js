import "../assets/style/css/components/custommenusymbol.css";

import React from "react";

import { CustomMenuSymbolProps } from "../utils/propType";

function CustomMenuSymbol(props) {
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

CustomMenuSymbol.propTypes = CustomMenuSymbolProps;

export default React.memo(CustomMenuSymbol);
