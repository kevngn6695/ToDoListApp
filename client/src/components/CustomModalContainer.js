import "../assets/style/css/components/custommodalcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import CustomCloseSymbol from "./CustomCloseSymbol";

import { capitalizeFirst } from "../services/capitalizeFirst";

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
    placeholder: capitalizeFirst(props.description),
  };
  const customCloseButtonProps = {
    className: "to-do-close-button",
    onClick: props.onClose,
  };

  const customCloseSymbolProps = {
    className: "to-do-close-symbol",
  };

  return (
    <section className={props.className}>
      <CustomButton {...customCloseButtonProps}>
        {/* <CustomCloseSymbol {...customCloseSymbolProps} /> */}
        <span className="to-do-close-symbol"></span>
        <span className="to-do-close-symbol"></span>
      </CustomButton>
      <CustomTextHeading {...customTextHeadingProps} />
      <CustomTextInput {...customTextInputProps} />
    </section>
  );
}

export default CustomModalContainer;
