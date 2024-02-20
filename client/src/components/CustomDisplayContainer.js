// Importing the custom container styles from the CSS file.
import "../assets/style/css/components/customcontainer.sass";

// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomDisplayContainerProps } from "../utils/proptype";

// Functional component for rendering a display container.
function CustomDisplayContainer(props) {
  // Rendering a section element with provided className and children.
  return <section className={props.className}>{props.children}</section>;
}

// Assigning PropTypes to the CustomDisplayContainer component.
CustomDisplayContainer.propTypes = CustomDisplayContainerProps;

// Exporting the CustomDisplayContainer component wrapped in React.memo for performance optimization.
export default React.memo(CustomDisplayContainer);
