import "../assets/style/css/components/customtextheading.css";

import React from "react";

import PropTypes from "prop-types";

function CustomTextHeading(props) {
  const { className, children, h1, h2, h3, h4, h5, h6 } = props;
  const headingLevels = { h1, h2, h3, h4, h5, h6 };
  const level = Object.keys(headingLevels).find((key) => headingLevels[key]);

  if (level) {
    return React.createElement(level, { className }, children);
  }

  return;
}

CustomTextHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};
export default React.memo(CustomTextHeading);
