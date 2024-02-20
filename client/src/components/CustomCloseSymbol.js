// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing the custom close symbol styles from the CSS file.
import "../assets/style/css/components/customclosesymbol.sass";

// Importing PropTypes for defining the type of props.
import { CustomCloseSymbolProps } from "../utils/proptype";

// Functional component for rendering a custom close symbol.
function CustomCloseSymbol(props) {
  // Rendering two div elements with the provided className.
  return (
    <>
      <div className={props.className}></div>
      <div className={props.className}></div>
    </>
  );
}

// Prop type validation for CustomCloseSymbol component.
CustomCloseSymbol.propTypes = CustomCloseSymbolProps;

// Exporting the CustomCloseSymbol component wrapped in React.memo for performance optimization.
export default React.memo(CustomCloseSymbol);
