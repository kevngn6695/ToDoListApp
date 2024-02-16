// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { FooterProps } from "../utils/propType";

// Importing the footer styles from the CSS file.
import "../assets/style/css/main/footer.css";

// Functional component for rendering the footer.
function Footer(props) {
  // Returning a footer element containing copyright information.
  return (
    <footer>
      <p className={props.className}>
        Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}

// Assigning PropTypes to the Footer component.
Footer.propTypes = FooterProps;

// Exporting the Footer component wrapped in React.memo for performance optimization.
export default React.memo(Footer);
