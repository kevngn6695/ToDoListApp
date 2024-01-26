import "../assets/style/css/main/header.css";

import React from "react";

import PropTypes from "prop-types";

function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default React.memo(Header);
