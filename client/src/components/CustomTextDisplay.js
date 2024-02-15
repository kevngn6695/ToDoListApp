import "../assets/style/css/components/customtextdisplay.css";

import CustomEditModal from "./CustomEditModal";

import React from "react";

import { CustomTextDisplayProps } from "../utils/propType";

function CustomTextDisplay(props) {
  return (
    <CustomEditModal
      className={props.classNameContainer}
      classNameModal={props.classNameModal}
      modalOpen={props.modalOpen}
      setModalOpen={props.setModalOpen}
    />
  );
}

CustomTextDisplay.propTypes = CustomTextDisplayProps;

export default React.memo(CustomTextDisplay);
