// Importing utility function for capitalizing the first letter of a string.
import { capitalizeFirst } from "../services/capitalizefirst";

// Importing React and useState hook for managing component state.
import React, { useState } from "react";

// Importing PropTypes for defining the type of props.
import { CustomModalContainerProps } from "../utils/proptype";

// Importing custom components for building the modal container.
import CustomButton from "./CustomButton";
import CustomCloseSymbol from "./CustomCloseSymbol";
import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";

// Importing the custom container styles from the CSS file.
import "../assets/style/css/components/customcontainer.sass";

// Functional component for rendering a modal container with editing functionality.
function CustomModalContainer(props) {
  // Managing the state of the description input field.
  const [description, setDescription] = useState(props.description);

  // Function to handle updating the description via API call.
  const handleUpdateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch(`http://localhost:5000/todos/${props.todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Reset description state and close modal after successful update
      if (res.ok) {
        setDescription(""); // Reset description state
        props.onClose(); // Close modal
        props.setModalOpen(false); // Close modal
      }

      // window.location = "/";
      console.log(props.todoId);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Function to handle changes in the description input field.
  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  // Rendering the modal container with input fields and buttons.
  return (
    <section className={props.className}>
      {/* Close button for the modal */}
      <CustomButton
        className="to-do-modal-close-button"
        onClick={() => {
          props.onClose();
          props.setModalOpen(false);
        }}
      >
        {/* Custom close symbol */}
        <CustomCloseSymbol className={`to-do-close-symbol`} />
      </CustomButton>
      {/* Heading for the editing section */}
      <CustomTextHeading
        className="to-do-edit-text-heading"
        children="Task"
        h1
      />
      {/* Text input field for editing the description */}
      <CustomTextInput
        classNameForm="to-do-edit-text-input-form"
        classNameInput="to-do-edit-text-input"
        type="text"
        placeholder={capitalizeFirst(props.description)}
        onChange={(e) => handleOnChange(e)}
        onSubmit={(e) => handleUpdateDescription(e)}
      />
      {/* Button to save the changes */}
      <CustomButton
        className="to-do-edit-button"
        onClick={(e) => handleUpdateDescription(e)}
      >
        Save
      </CustomButton>
    </section>
  );
}

// Assigning PropTypes to the CustomModalContainer component.
CustomModalContainer.propTypes = CustomModalContainerProps;

// Exporting the CustomModalContainer component wrapped in React.memo for performance optimization.
export default React.memo(CustomModalContainer);
