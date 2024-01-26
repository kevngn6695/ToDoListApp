import "../assets/style/css/components/customcontainer.css";

import React from "react";

import PropTypes from "prop-types";

function CustomMainContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

CustomMainContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default React.memo(CustomMainContainer);
