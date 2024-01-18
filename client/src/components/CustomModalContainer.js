import "../assets/style/css/components/custommodalcontainer.css";

import CustomTextHeading from "./CustomTextHeading";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
// import CustomCloseSymbol from "./CustomCloseSymbol";

import { capitalizeFirst } from "../services/capitalizeFirst";

import React from "react";

function CustomModalContainer(props) {
  return (
    <section className={props.className}>
      <CustomButton className="to-do-close-button" onClick={props.onClose}>
        {/* <CustomCloseSymbol {...customCloseSymbolProps} /> */}
        <span className="to-do-close-symbol"></span>
        <span className="to-do-close-symbol"></span>
      </CustomButton>
      <CustomTextHeading className="to-do-edit-text-heading" children="Task" />
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
