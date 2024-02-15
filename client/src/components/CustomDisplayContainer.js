import "../assets/style/css/components/customcontainer.css";

import React from "react";

import { CustomDisplayContainerProps } from "../utils/propType";

function CustomDisplayContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

CustomDisplayContainer.propTypes = CustomDisplayContainerProps;
export default React.memo(CustomDisplayContainer);
