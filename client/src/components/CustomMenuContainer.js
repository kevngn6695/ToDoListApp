import { useState, useEffect } from "react";
import "../assets/style/css/components/custommenucontainer.css";

import CustomMenuSymbol from "./CustomMenuSymbol.js";
import CustomButton from "./CustomButton.js";
import CustomTextHeading from "./CustomTextHeading.js";
import CustomTextInput from "./CustomTextInput.js";

function CustomMenuContainer(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const customMenuButtonProps = {
    className: `to-do-menu-button ${isMenuOpen ? "open" : "closed"}`,
    onClick: handleMenuOpen,
  };

  const customMenuSymbolProps = {
    className: `to-do-menu-symbol`,
  };

  // Initialize text heading props
  const customMenuTextHeadingProps = {
    className: `to-do-menu-text-heading ${isMenuOpen ? "open" : "closed"}`,
    children: "Menu",
  };

  // Initialize text input props
  const customMenuTextInputProps = {
    classNameForm: `to-do-menu-text-input-form ${
      isMenuOpen ? "open" : "closed"
    }`,
    classNameInput: `to-do-menu-text-input ${isMenuOpen ? "open" : "closed"}`,
    type: "text",
    placeholder: "Rearch",
  };

  return (
    <div className={`${props.className} ${isMenuOpen ? "open" : "closed"}`}>
      <CustomButton {...customMenuButtonProps}>
        <CustomMenuSymbol {...customMenuSymbolProps} />
      </CustomButton>
      {isMenuOpen && (
        <>
          <CustomTextHeading {...customMenuTextHeadingProps} />
          <CustomTextInput {...customMenuTextInputProps} />
        </>
      )}
    </div>
  );
}

export default CustomMenuContainer;
