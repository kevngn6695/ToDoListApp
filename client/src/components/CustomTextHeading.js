// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomTextHeadingProps } from "../utils/propType";

// Importing the custom text heading styles from the CSS file.
import "../assets/style/css/components/customtextheading.css";

// Functional component for rendering a custom text heading.
function CustomTextHeading(props) {
  // Destructuring props to access className, children, and heading level props.
  const { className, children, h1, h2, h3, h4, h5, h6 } = props;

  // Creating an object with heading level props.
  const headingLevels = { h1, h2, h3, h4, h5, h6 };

  // Finding the first truthy heading level prop.
  const level = Object.keys(headingLevels).find((key) => headingLevels[key]);

  // Rendering the appropriate heading element with className and children props.
  if (level) {
    return React.createElement(level, { className }, children);
  }

  // Returning null if no heading level prop is provided.
  return null;
}

// Assigning PropTypes to the CustomTextHeading component.
CustomTextHeading.propTypes = CustomTextHeadingProps;

// Exporting the CustomTextHeading component wrapped in React.memo for performance optimization.
export default React.memo(CustomTextHeading);
