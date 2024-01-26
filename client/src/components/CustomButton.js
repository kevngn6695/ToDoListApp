import "../assets/style/css/components/custombutton.css";

import React from "react";

import PropTypes from "prop-types";

function CustomButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default React.memo(CustomButton);
