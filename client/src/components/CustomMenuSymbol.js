// Importing the custom menu symbol styles from the CSS file.
import "../assets/style/css/components/custommenusymbol.sass";

// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomMenuSymbolProps } from "../utils/proptype";

// Functional component for rendering a custom menu symbol.
function CustomMenuSymbol(props) {
  // Rendering three div elements with the provided className.
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

// Assigning PropTypes to the CustomMenuSymbol component.
CustomMenuSymbol.propTypes = CustomMenuSymbolProps;

// Exporting the CustomMenuSymbol component wrapped in React.memo for performance optimization.
export default React.memo(CustomMenuSymbol);
