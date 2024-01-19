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

import React, { useState, useEffect } from "react";

function App() {
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const newDate = new Date();
  const newTime = new Date().toLocaleTimeString([], options);

  const [description, setDescription] = useState(""); // Initialize the state for manipulating descriptions from the api
  const [date, setDate] = useState(newDate);
  const [time, setTime] = useState(newTime);

  // Day
  const dateStr = date.toLocaleDateString();
  const currentYear = date.getFullYear();
  const dayIdx = date.getDay();
  const today = dayNames[dayIdx];

  // Time

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date().toLocaleTimeString([], options));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <Header />
      <Body className="to-do-body">
        <CustomDeleteBin
          classNameWrapper="to-do-delete-icon-wrapper"
          className="to-do-delete"
        />
        <CustomMainContainer className="to-do-main-container">
          <CustomMenuContainer className="to-do-menu-container" />
          <CustomDisplayContainer className="to-do-display-container">
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
              classNameForm="to-do-main-text-input-form"
              classNameInput="to-do-main-text-input"
              type="text"
              placeholder="Add a task"
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
              description={description}
            />
            <CustomTextDisplay
              classNameContainer="to-do-text-display-container"
              classNameModal="to-do-modal"
            />
          </CustomDisplayContainer>
        </CustomMainContainer>
      </Body>
      <Footer className="to-do-footer-paragraph" currentYear={currentYear} />
    </div>
  );
}

export default React.memo(App);
