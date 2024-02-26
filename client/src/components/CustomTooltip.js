import React, { useState } from "react";

import "../assets/style/css/components/customtooltip.sass";

function CustomTooltip(props) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={props.classNameTooltipContainer}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {props.children}
      {showTooltip && (
        <div className={props.classNameTooltip}>{props.text}</div>
      )}
    </div>
  );
}

export default React.memo(CustomTooltip);
