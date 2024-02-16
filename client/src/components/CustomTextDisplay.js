// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing CustomEditModal component for displaying text with editing capabilities.
import CustomEditModal from "./CustomEditModal";

// Importing the custom text display styles from the CSS file.
import "../assets/style/css/components/customtextdisplay.css";

// Importing PropTypes for defining the type of props.
import { CustomTextDisplayProps } from "../utils/propType";

// Functional component for rendering a custom text display with editing capabilities.
function CustomTextDisplay(props) {
  // Rendering the CustomEditModal component with provided props.
  return (
    <CustomEditModal
      className={props.classNameContainer}
      classNameModal={props.classNameModal}
      modalOpen={props.modalOpen}
      setModalOpen={props.setModalOpen}
    />
  );
}

// Assigning PropTypes to the CustomTextDisplay component.
CustomTextDisplay.propTypes = CustomTextDisplayProps;

// Exporting the CustomTextDisplay component wrapped in React.memo for performance optimization.
export default React.memo(CustomTextDisplay);
