import "../assets/style/css/components/custommaincontainer.css";

import React from "react";

function CustomMainContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default React.memo(CustomMainContainer);
