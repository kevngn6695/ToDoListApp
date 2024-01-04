import "./assets/style/css/main/app.css";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

import CustomTextHeading from "./components/CustomTextHeading.js";
import CustomTextInput from "./components/CustomTextInput.js";
import CustomTextDisplay from "./components/CustomTextDisplay.js";
import CustomListItem from "./components/CustomListItem.js";

function App() {
  // Initialize body tag props
  const customBodyProps = {
    className: "to-do-body",
  };
  // Initialize text heading props
  const customTextHeadingProps = {
    className: "to-do-text-header-container",
    children: "To Do List",
  };
  // Initialize text input props
  const customTextInputProps = {
    className: "to-do-text-input-container",
    type: "text",
  };
  // Initialize text display props
  const customTextDisplayProps = {
    className: "to-do-text-display",
  };
  // Initialize list item props
  const customListItemProps = {
    className: "to-do-list-item",
  };
  // Initialize footer props
  const customFooterProps = {
    className: "to-do-footer",
  };

  return (
    <div className="App">
      <Header></Header>
      <Body {...customBodyProps}>
        <CustomTextHeading {...customTextHeadingProps} />
        <CustomTextInput {...customTextInputProps} />
        <CustomTextDisplay {...customTextDisplayProps}>
          <CustomListItem {...customListItemProps} />
        </CustomTextDisplay>
      </Body>
      <Footer {...customFooterProps} />
    </div>
  );
}

export default App;
