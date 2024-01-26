import React from "react";

import "../assets/style/css/components/customclosesymbol.css";

import PropTypes from "prop-types";

function CustomCloseSymbol(props) {
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

CustomCloseSymbol.propTypes = {
  className: PropTypes.string,
};

export default React.memo(CustomCloseSymbol);
