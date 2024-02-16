import "../assets/style/css/main/body.css";

import React from "react";

import { BodyProps } from "../utils/propType";

function Body(props) {
  return <body className={props.className}>{props.children}</body>;
}

Body.propTypes = BodyProps;

export default React.memo(Body);
