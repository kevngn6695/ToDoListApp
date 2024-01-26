import "../assets/style/css/components/customcontainer.css";

import React from "react";

import PropTypes from "prop-types";

function CustomDisplayContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

CustomDisplayContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default React.memo(CustomDisplayContainer);
