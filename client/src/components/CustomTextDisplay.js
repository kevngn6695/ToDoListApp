import "../assets/style/css/components/customtextdisplay.css";

import CustomEditModal from "./CustomEditModal";

import React from "react";

import PropTypes from "prop-types";

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

CustomTextDisplay.propTypes = {
  className: PropTypes.string,
  classNameModal: PropTypes.string,
  modalOpen: PropTypes.bool,
  // setModalOpen: PropTypes.func,
};

export default React.memo(CustomTextDisplay);
