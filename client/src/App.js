import "./assets/style/css/main/app.css";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

import CustomMainContainer from "./components/CustomMainContainer.js";
import CustomMenuContainer from "./components/CustomMenuContainer.js";
import CustomTextHeading from "./components/CustomTextHeading.js";
import CustomTextInput from "./components/CustomTextInput.js";
import CustomTextDisplay from "./components/CustomTextDisplay.js";
import CustomMenuTextInput from "./components/CustomMenuTextInput.js";

function App() {
  // Day
  const date = new Date();
  const currentYear = date.getFullYear();
  const getDateNames = (date) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIdx = date.getDay();
    return dayNames[dayIdx];
  };
  const today = getDateNames(date);

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
  };

  // Initialize text input props
  const customMenuTextInputProps = {
    classNameForm: "to-do-menu-text-input-form",
    classNameInput: "to-do-menu-text-input",
    type: "text",
    placeholder: "Rearch",
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
      <Header></Header>
      <Body {...customBodyProps}>
        <CustomMainContainer {...customMainContainerProps}>
          <CustomMenuContainer {...customMenuContainerProps}>
            <CustomTextHeading {...customMenuTextHeadingProps} />
            <CustomMenuTextInput {...customMenuTextInputProps} />
          </CustomMenuContainer>
          <CustomTextHeading {...customMainTextHeadingProps} />
          <CustomTextInput {...customMainTextInputProps} />
          <CustomTextDisplay {...customTextDisplayProps} />
        </CustomMainContainer>
      </Body>
      <Footer {...customFooterProps} />
    </div>
  );
}

export default App;
