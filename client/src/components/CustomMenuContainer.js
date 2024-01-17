import { useState } from "react";
import "../assets/style/css/components/custommenucontainer.css";

import CustomMenuSymbol from "./CustomMenuSymbol.js";
import CustomButton from "./CustomButton.js";

function CustomMenuContainer(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const customMenuButtonProps = {
    className: `to-do-menu-button ${isMenuOpen ? "open" : ""}`,
    onClick: handleMenuOpen,
  };

  const customMenuSymbolProps = {
    className: `to-do-menu-symbol`,
  };

  return (
    <div className={`${props.className} ${isMenuOpen ? "open" : "closed"}`}>
      <CustomButton {...customMenuButtonProps}>
        <CustomMenuSymbol {...customMenuSymbolProps} />
      </CustomButton>
      {isMenuOpen && props.children}
    </div>
  );
}

export default CustomMenuContainer;
