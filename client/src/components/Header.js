import "../assets/style/css/main/header.css";

import React from "react";

import { HeaderProps } from "../utils/propType";

function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

Header.propTypes = HeaderProps;
export default React.memo(Header);
