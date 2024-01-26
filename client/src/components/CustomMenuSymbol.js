import "../assets/style/css/components/custommenusymbol.css";

import React from "react";

import PropTypes from "prop-types";

function CustomMenuSymbol(props) {
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

CustomMenuSymbol.propTypes = {
  className: PropTypes.string,
};
export default React.memo(CustomMenuSymbol);
