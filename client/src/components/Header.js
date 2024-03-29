// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { HeaderProps } from "../utils/proptype";

// Importing the header styles from the CSS file.
import "../assets/style/css/main/header.sass";

// Functional component for rendering the header.
function Header(props) {
  // Returning a header element with className and children props.
  return <header className={props.className} />;
}

// Assigning PropTypes to the Header component.
Header.propTypes = HeaderProps;

// Exporting the Header component wrapped in React.memo for performance optimization.
export default React.memo(Header);
