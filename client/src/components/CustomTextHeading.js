import "../assets/style/css/components/customtextheading.css";

import React from "react";

function CustomTextHeading(props) {
  return <h1 className={props.className}>{props.children}</h1>;
}

export default React.memo(CustomTextHeading);
