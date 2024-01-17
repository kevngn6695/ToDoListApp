import "./assets/style/css/main/app.css";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

import CustomMainContainer from "./components/CustomMainContainer.js";
import CustomMenuContainer from "./components/CustomMenuContainer.js";
import CustomDisplayContainer from "./components/CustomDisplayContainer.js";
import CustomTextHeading from "./components/CustomTextHeading.js";
import CustomTextInput from "./components/CustomTextInput.js";
import CustomTextDisplay from "./components/CustomTextDisplay.js";
import CustomDeleteBin from "./components/CustomDeleteBin.js";

import { useState } from "react";

function App() {
  const [description, setDescription] = useState(""); // Initialize the state for manipulating descriptions from the api

  // Day
  const date = new Date();
  const currentYear = date.getFullYear();
  const getDateNames = (date) => {
    const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const dayIdx = date.getDay();
    return dayNames[dayIdx];
  };
  const today = getDateNames(date);

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(res);
    } catch (err) {
      console.err(err.message);
    }
  };

  // Initialize body tag props
  const customBodyProps = {
    className: "to-do-body",
  };

  // Initialize menu container props
  const customMenuContainerProps = {
    className: "to-do-menu-container",
  };

  // Initialize main container props
  const customMainContainerProps = {
    className: "to-do-main-container",
  };

  // Initialize display container props
  const customDisplayContainerProps = {
    className: "to-do-display-container",
  };

  // Initialize text heading props
  const customMainTextHeadingProps = {
    className: "to-do-main-text-heading",
    children: today,
  };

  // Initialize text heading props
  const customMenuTextHeadingProps = {
    className: "to-do-menu-text-heading",
    children: "Menu",
  };

  // Initialize text input props
  const customMainTextInputProps = {
    classNameForm: "to-do-main-text-input-form",
    classNameInput: "to-do-main-text-input",
    type: "text",
    placeholder: "Add a task",
    onChange: handleOnChange,
    onSubmit: handleOnSubmit,
    description: description,
  };

  // Initialize text input props
  const customMenuTextInputProps = {
    classNameForm: "to-do-menu-text-input-form",
    classNameInput: "to-do-menu-text-input",
    type: "text",
    placeholder: "Rearch",
  };

  const customDeleteButtonProps = {
    classNameWrapper: "to-do-delete-icon-wrapper",
    className: "to-do-delete",
  };

  // Initialize text display props
  const customTextDisplayProps = {
    classNameContainer: "to-do-text-display-container",
    classNameModal: "to-do-modal",
  };

  // Initialize footer props
  const customFooterProps = {
    className: "to-do-footer-paragraph",
    currentYear: currentYear,
  };

  return (
    <div className="App">
      <Header />
      <Body {...customBodyProps}>
        <CustomDeleteBin {...customDeleteButtonProps} />
        <CustomMainContainer {...customMainContainerProps}>
          <CustomMenuContainer {...customMenuContainerProps}>
            <CustomTextHeading {...customMenuTextHeadingProps} />
            <CustomTextInput {...customMenuTextInputProps} />
          </CustomMenuContainer>
          <CustomDisplayContainer {...customDisplayContainerProps}>
            <CustomTextHeading {...customMainTextHeadingProps} />
            <CustomTextInput {...customMainTextInputProps} />
            <CustomTextDisplay {...customTextDisplayProps} />
          </CustomDisplayContainer>
        </CustomMainContainer>
      </Body>
      <Footer {...customFooterProps} />
    </div>
  );
}

export default App;
