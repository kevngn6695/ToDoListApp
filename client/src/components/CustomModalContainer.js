import "../assets/style/css/components/customcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import CustomCloseSymbol from "./CustomCloseSymbol";

import { capitalizeFirst } from "../services/capitalizeFirst";

import React, { useState } from "react";

import PropTypes from "prop-types";

function CustomModalContainer(props) {
  const [description, setDescription] = useState(props.description);

  const handleUpdateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${props.todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // window.location = "/";
      console.log(props.todoId);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <section className={props.className}>
      <CustomButton
        className="to-do-modal-close-button"
        onClick={() => {
          props.onClose();
          props.setModalOpen(false);
        }}
      >
        <CustomCloseSymbol className={`to-do-close-symbol`} />
      </CustomButton>
      <CustomTextHeading
        className="to-do-edit-text-heading"
        children="Task"
        h1
      />

      <CustomTextInput
        classNameForm="to-do-edit-text-input-form"
        classNameInput="to-do-edit-text-input"
        type="text"
        placeholder={capitalizeFirst(props.description)}
        onChange={(e) => handleOnChange(e)}
        onSubmit={(e) => handleUpdateDescription(e)}
      />

      <CustomButton
        className="to-do-edit-button"
        onClick={(e) => handleUpdateDescription(e)}
      >
        Save
      </CustomButton>
    </section>
  );
}

CustomModalContainer.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  todoId: PropTypes.number,
  onClick: PropTypes.func,
  setModalOpen: PropTypes.func,
};

export default React.memo(CustomModalContainer);
