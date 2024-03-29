// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing PropTypes for defining the type of props.
import { CustomTextInputProps } from "../utils/proptype";

// Importing the custom text input styles from the CSS file.
import "../assets/style/css/components/customtextinput.sass";

/**
 * Functional component for rendering a custom text input.
 * @return the custom text input for multipurposes.
 */
function CustomTextInput({
  classNameForm,
  classNameInput,
  description,
  ...props
}) {
  // Returning a form element with an input field for text input.
  return (
    <form className={classNameForm} onSubmit={props.onSubmit}>
      <input
        className={classNameInput}
        value={description}
        onChange={props.onChange}
        {...props}
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
