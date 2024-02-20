// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { BodyProps } from "../utils/proptype";

// Importing the body styles from the CSS file.
import "../assets/style/css/main/body.sass";

// Functional component for rendering the body element.
function Body(props) {
  // Rendering the body element with the provided className and children.
  return <body className={props.className}>{props.children}</body>;
}

// Prop type validation for Body component.
Body.propTypes = BodyProps;

// Exporting the Body component wrapped in React.memo for performance optimization.
export default React.memo(Body);
