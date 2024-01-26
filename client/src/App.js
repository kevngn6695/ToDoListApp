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

import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

function App() {
  // Initialize weekday and time objects
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  // Create a new instance for date and time
  const newDate = new Date();
  const newTime = new Date().toLocaleTimeString([], options);

  const [description, setDescription] = useState(""); // Initialize the state for manipulating descriptions from the api
  const [date, setDate] = useState(newDate); // Initialize the state for date
  const [time, setTime] = useState(newTime); // Initialize the state for time
  const [modalOpen, setModalOpen] = useState(null); // Initialize the state for openning modal
  const [isMenuOpen, setMenuOpen] = useState(false); // Initialize the state for openning menu

  // Create a weekday
  const dateStr = date.toLocaleDateString();
  const currentYear = date.getFullYear();
  const dayIdx = date.getDay();
  const today = dayNames[dayIdx];

  // Handle changing the description
  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  // Handle create a new task
  const handleCreateTask = async (e) => {
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

  // Handle menu open
  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Use apply effects
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date().toLocaleTimeString([], options));
    }, 100);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="App">
      <Header />
      <Body className="to-do-body">
        <CustomMainContainer className="to-do-main-container">
          <CustomMenuContainer
            className="to-do-menu-container"
            onClick={handleMenuOpen}
            isMenuOpen={isMenuOpen}
            modalOpen={modalOpen}
          />
          <CustomDisplayContainer
            className={`to-do-display-container ${
              isMenuOpen ? "open" : "closed"
            }`}
          >
            <CustomTextHeading
              className="to-do-main-text-heading-week-day"
              children={today}
              h1
            />
            <CustomTextHeading
              className="to-do-main-text-heading-date"
              children={dateStr}
              h5
            />
            <CustomTextHeading
              className="to-do-main-text-heading-time"
              children={time}
              h5
            />
            <CustomTextInput
              classNameForm={`to-do-main-text-input-form ${
                modalOpen ? "open" : "closed"
              }`}
              classNameInput={`to-do-main-text-input`}
              type="text"
              placeholder="Add a task"
              onChange={handleOnChange}
              onSubmit={handleCreateTask}
              description={description}
            />
            <CustomTextDisplay
              classNameContainer={`to-do-text-display-container ${
                modalOpen ? "open" : "closed"
              }`}
              classNameModal="to-do-modal"
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </CustomDisplayContainer>
        </CustomMainContainer>
      </Body>
      <Footer className="to-do-footer-paragraph" currentYear={currentYear} />
    </div>
  );
}

// Checking type for props.
App.propTypes = {
  className: PropTypes.string,
  classNameForm: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameModal: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  currentYear: PropTypes.number,
  isMenuOpen: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default React.memo(App);
