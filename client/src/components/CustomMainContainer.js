// Importing the custom container styles from the CSS file.
import "../assets/style/css/components/customcontainer.sass";

// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomMainContainerProps } from "../utils/proptype";

// Functional component for rendering a main container.
function CustomMainContainer(props) {
  // Rendering a section element with provided className and children.
  return <section className={props.className}>{props.children}</section>;
}

// Assigning PropTypes to the CustomMainContainer component.
CustomMainContainer.propTypes = CustomMainContainerProps;

// Exporting the CustomMainContainer component wrapped in React.memo for performance optimization.
export default React.memo(CustomMainContainer);
