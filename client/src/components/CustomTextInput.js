// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomTextInputProps } from "../utils/propType";

// Importing the custom text input styles from the CSS file.
import "../assets/style/css/components/customtextinput.css";

// Functional component for rendering a custom text input.
function CustomTextInput(props) {
  // Returning a form element with an input field for text input.
  return (
    <form className={props.classNameForm} onSubmit={props.onSubmit}>
      <input
        className={props.classNameInput}
        type={props.type}
        placeholder={props.placeholder}
        value={props.description}
        onChange={props.onChange}
      />
      {/* Commented out span element, possibly intended for future use */}
      {/* <span className="to-do-add-sign"></span> */}
    </form>
  );
}

// Assigning PropTypes to the CustomTextInput component.
CustomTextInput.propTypes = CustomTextInputProps;

// Exporting the CustomTextInput component wrapped in React.memo for performance optimization.
export default React.memo(CustomTextInput);
