import "../assets/style/css/components/customcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";

import { capitalizeFirst } from "../services/capitalizeFirst";

import React from "react";
import CustomCloseSymbol from "./CustomCloseSymbol";

function CustomModalContainer(props) {
  return (
    <section className={props.className}>
      <CustomButton
        className="to-do-modal-close-button"
        onClick={props.onClose}
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
