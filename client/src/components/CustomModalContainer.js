import "../assets/style/css/components/customcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import CustomCloseSymbol from "./CustomCloseSymbol";

import { capitalizeFirst } from "../services/capitalizeFirst";

import React, { useState } from "react";

function CustomModalContainer(props) {
  // const [description, setDescription] = useState(props.todos.description);

  // const handleUpdateDescription = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { description };
  //     const response = await fetch(
  //       `http://localhost:5000/todos/${props.todos.id}`,
  //       {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       }
  //     );
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  const handleOnChange = (e) => {};

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
      />
    </section>
  );
}

export default React.memo(CustomModalContainer);
