import React from "react";

import "../assets/style/css/components/customtooltip.sass";

function CustomTooltip(props) {
  return (
    <div className={props.classNameTooltipContainer}>
      {props.children}{" "}
      <span className={props.classNameTooltip}>{props.text}</span>
    </div>
  );
}

export default React.memo(CustomTooltip);
