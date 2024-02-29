import React from "react";

import "../assets/style/css/components/customcontainer.sass";

function CustomDateAndTimeContainer(props) {
  return (
    <div className={props.classNameDateAndTimeContainer}>{props.children}</div>
  );
}

export default React.memo(CustomDateAndTimeContainer);
