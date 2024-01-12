import "../assets/style/css/components/custommodalcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";

// import { useState } from "react";
function CustomModalContainer(props) {
  const customTextHeadingProps = {
    className: "to-do-edit-text-heading",
    children: "Task",
  };
  const customTextInputProps = {
    classNameForm: "to-do-edit-text-input-form",
    classNameInput: "to-do-edit-text-input",
    type: "text",
    placeholder: props.description,
  };
  const customCloseButtonProps = {
    className: "to-do-close-button",
    onClick: props.onClose,
  };
  const customDeleteButtonProps = {
    className: "to-do-delete-button",
    children: "Delete",
    onClick: props.onDelete,
  };

  return (
    <section className={props.className}>
      <CustomButton {...customCloseButtonProps}></CustomButton>
      <CustomTextHeading {...customTextHeadingProps} />
      <CustomTextInput {...customTextInputProps} />
      <CustomButton {...customDeleteButtonProps} />
    </section>
  );
}

export default CustomModalContainer;
