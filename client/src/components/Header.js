import "../assets/style/css/main/header.css";

import React from "react";

function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

export default React.memo(Header);
