import "../assets/style/css/components/customcontainer.css";

import React from "react";

import { CustomMainContainerProps } from "../utils/propType";

function CustomMainContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

CustomMainContainer.propTypes = CustomMainContainerProps;
export default React.memo(CustomMainContainer);
