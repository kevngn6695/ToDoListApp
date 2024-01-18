import "../assets/style/css/components/customtextheading.css";

import React from "react";

function CustomTextHeading(props) {
  const { className, children, h1, h2, h3, h4, h5, h6 } = props;
  const headingLevels = { h1, h2, h3, h4, h5, h6 };
  const level = Object.keys(headingLevels).find((key) => headingLevels[key]);

  if (level) {
    return React.createElement(level, { className }, children);
  }

  return;
}

export default React.memo(CustomTextHeading);
