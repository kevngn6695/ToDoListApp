import "../assets/style/css/components/customtextdisplay.css";

import CustomEditModal from "./CustomEditModal";

import React from "react";

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

export default React.memo(CustomTextDisplay);
