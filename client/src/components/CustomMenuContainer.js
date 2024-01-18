import React, { useState } from "react";

import "../assets/style/css/components/customcontainer.css";

import CustomMenuSymbol from "./CustomMenuSymbol.js";
import CustomButton from "./CustomButton.js";
import CustomTextHeading from "./CustomTextHeading.js";
import CustomTextInput from "./CustomTextInput.js";

function CustomMenuContainer(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${props.className} ${isMenuOpen ? "open" : "closed"}`}>
      <CustomButton
        className={`to-do-menu-button ${isMenuOpen ? "open" : "closed"}`}
        onClick={handleMenuOpen}
      >
        <CustomMenuSymbol className={`to-do-menu-symbol`} />
      </CustomButton>
      {isMenuOpen && (
        <>
          <CustomTextHeading
            className={`to-do-menu-text-heading ${
              isMenuOpen ? "open" : "closed"
            }`}
            children="Menu"
            h1
          />
          <CustomTextInput
            classNameForm={`to-do-menu-text-input-form ${
              isMenuOpen ? "open" : "closed"
            }`}
            classNameInput={`to-do-menu-text-input ${
              isMenuOpen ? "open" : "closed"
            }`}
            type="text"
            placeholder="Rearch"
          />
          <CustomTextHeading
            className={`to-do-menu-tasks-text-heading ${
              isMenuOpen ? "open" : "closed"
            }`}
            children={`TASKS`}
            h6
          />
        </>
      )}
    </div>
  );
}

export default React.memo(CustomMenuContainer);
