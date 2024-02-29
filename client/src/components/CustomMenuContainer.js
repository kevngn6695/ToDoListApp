// Importing React for JSX syntax and basic functionality.
import React from "react";

// Importing custom components for building the menu container.
import CustomButton from "./CustomButton.js";
import CustomDeleteBin from "./CustomDeleteBin.js";
import CustomMenuSymbol from "./CustomMenuSymbol.js";
import CustomTaskNav from "./CustomTaskNav.js";
import CustomTextHeading from "./CustomTextHeading.js";
import CustomTextInput from "./CustomTextInput.js";

// Importing the custom container styles from the CSS file.
import "../assets/style/css/components/customcontainer.sass";

// Importing PropTypes for defining the type of props.
import { CustomMenuContainerProps } from "../utils/proptype.js";

// Functional component for rendering a menu container with various components.
function CustomMenuContainer(props) {
  // Initializing the url for navigating pages throughtout the web
  const urlLink = [
    { url: "/", text: "Today" },
    { url: "/upcomming", text: "upcomming" },
    { url: "/calendar", text: "calendar" },
    { url: "/note", text: "note" },
  ];
  // Rendering the menu container with conditional rendering based on isMenuOpen prop.
  return (
    <div
      className={`${props.className} ${props.isMenuOpen ? "open" : "closed"}`}
    >
      {/* Button to toggle the menu */}
      <CustomButton
        className={`to-do-menu-button ${props.isMenuOpen ? "open" : "closed"}`}
        onClick={props.onClick}
      >
        {/* Custom menu symbol */}
        <CustomMenuSymbol className={`to-do-menu-symbol`} />
      </CustomButton>

      {/* Conditional rendering for menu content */}
      {props.isMenuOpen && (
        <>
          {/* Heading for the menu */}
          {/* <CustomTooltip
            classNameTooltipContainer={`to-do-tooltip-container`}
            classNameTooltip={`to-do-tooltip`}
            text="Open"
          > */}
          <CustomTextHeading
            className={`to-do-menu-text-heading ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            children="Menu"
            h1
          />
          {/* </CustomTooltip> */}

          {/* Text input field */}
          <CustomTextInput
            classNameForm={`to-do-menu-text-input-form ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            classNameInput={`to-do-menu-text-input ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            type="text"
            placeholder="Search"
          />

          {/* Heading for tasks */}
          <CustomTextHeading
            className={`to-do-menu-tasks-text-heading ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            children={`TASKS`}
            h6
          />
          <CustomTaskNav
            classNameList={`to-do-menu-nav-list ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            classNameListItem={`to-do-menu-nav-list-item ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            classNameLink={`to-do-menu-nav-link ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            urlLink={urlLink}
          />
          {/* Heading for tasks */}
          <CustomTextHeading
            className={`to-do-menu-types-text-heading ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            children={`TYPES`}
            h6
          />
          {/* Delete bin icon */}
          <CustomDeleteBin
            classNameWrapper={`to-do-delete-icon-wrapper ${
              props.isMenuOpen ? "open" : "closed"
            }`}
            className="to-do-delete"
          />
        </>
      )}
    </div>
  );
}

// Assigning PropTypes to the CustomMenuContainer component.
CustomMenuContainer.propTypes = CustomMenuContainerProps;

// Exporting the CustomMenuContainer component wrapped in React.memo for performance optimization.
export default React.memo(CustomMenuContainer);
