import React from "react";

import "../assets/style/css/components/customcontainer.css";

import CustomMenuSymbol from "./CustomMenuSymbol.js";
import CustomButton from "./CustomButton.js";
import CustomTextHeading from "./CustomTextHeading.js";
import CustomTextInput from "./CustomTextInput.js";
import CustomDeleteBin from "./CustomDeleteBin.js";

import PropTypes from "prop-types";

function CustomMenuContainer(props) {
  return (
    <div
      className={`${props.className} ${props.isMenuOpen ? "open" : "closed"}`}
    >
      <CustomButton
        className={`to-do-menu-button ${props.isMenuOpen ? "open" : "closed"}`}
        onClick={props.onClick}
      >
        <CustomMenuSymbol className={`to-do-menu-symbol`} />
      </CustomButton>
      {props.isMenuOpen && (
        <>
          <CustomTextHeading
            className={`to-do-menu-text-heading ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            children="Menu"
            h1
          />
          <CustomTextInput
            classNameForm={`to-do-menu-text-input-form ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            classNameInput={`to-do-menu-text-input ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            type="text"
            placeholder="Rearch"
          />
          <CustomTextHeading
            className={`to-do-menu-tasks-text-heading ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            children={`TASKS`}
            h6
          />

          <CustomDeleteBin
            classNameWrapper={`to-do-delete-icon-wrapper ${
              props.modalOpen ? "open" : "closed"
            }`}
            className="to-do-delete"
          />
        </>
      )}
    </div>
  );
}

CustomMenuContainer.propTypes = {
  className: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  modalOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default React.memo(CustomMenuContainer);
