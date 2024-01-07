import "./assets/style/css/main/app.css";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

import CustomMainContainer from "./components/CustomMainContainer.js";
import CustomTextHeading from "./components/CustomTextHeading.js";
import CustomTextInput from "./components/CustomTextInput.js";
import CustomTextDisplay from "./components/CustomTextDisplay.js";
import CustomEditModal from "./components/CustomEditModal.js";

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

  // Initialize main container props
  const customMainContainerProps = {
    className: "to-do-main-container",
  };

  // Initialize text heading props
  const customTextHeadingProps = {
    className: "to-do-text-heading",
    dateName: today,
  };

  // Initialize text input props
  const customTextInputProps = {
    classNameForm: "to-do-text-input-form",
    classNameInput: "to-do-text-input",
    type: "text",
    placeholder: "Add a task",
  };

  // Initialize text display props
  const customTextDisplayProps = {
    classNameContainer: "to-do-text-display-container",
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
          <CustomTextHeading {...customTextHeadingProps} />
          <CustomTextInput {...customTextInputProps} />
          <CustomTextDisplay {...customTextDisplayProps} />
        </CustomMainContainer>
      </Body>
      <Footer {...customFooterProps} />
    </div>
  );
}

export default App;
