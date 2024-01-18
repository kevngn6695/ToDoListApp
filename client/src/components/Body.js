import "../assets/style/css/main/body.css";

import React from "react";

function Body(props) {
  return <body className={props.className}>{props.children}</body>;
}

export default React.memo(Body);
