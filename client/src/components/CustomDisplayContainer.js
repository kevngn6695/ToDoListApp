import "../assets/style/css/components/customcontainer.css";

import React from "react";

function CustomDisplayContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default React.memo(CustomDisplayContainer);
