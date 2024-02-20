// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomButtonProps } from "../utils/proptype";

// Importing the custom button styles from the CSS file.
import "../assets/style/css/components/custombutton.sass";

// Functional component for rendering a custom button.
function CustomButton(props) {
  // Rendering a button element with the provided className and onClick event handler.
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

// Prop type validation for CustomButton component.
CustomButton.propTypes = CustomButtonProps;

// Exporting the CustomButton component wrapped in React.memo for performance optimization.
export default React.memo(CustomButton);
