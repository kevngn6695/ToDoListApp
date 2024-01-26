import "../assets/style/css/main/body.css";

import React from "react";

import PropTypes from "prop-types";

function Body(props) {
  return <body className={props.className}>{props.children}</body>;
}

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(Body);
