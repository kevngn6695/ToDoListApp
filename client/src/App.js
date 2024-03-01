// Importing CSS file for styling
import "./assets/style/css/main/app.sass";

// Importing React and necessary hooks
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing main components
// import Header from "./components/Header";
import Footer from "./components/Footer";

import CustomMainContainer from "./components/CustomMainContainer";
import CustomMenuContainer from "./components/CustomMenuContainer";
import CustomTextHeading from "./components/CustomTextHeading";
import CustomDateAndTimeContainer from "./components/CustomDateAndTimeContainer";

// Import navigation pages
import Home from "./pages/Home";
import Upcoming from "./pages/Upcomming";
import Calendar from "./pages/Calendar";
import Note from "./pages/Note";

/**
 * Main element representing the To-Do list application.
 * @returns the view of the To-Do list application.
 */
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

  // State for managing application data
  const [date, setDate] = useState(newDate); // Initialize the state for date
  const [time, setTime] = useState(newTime); // Initialize the state for time
  const [modalOpen, setModalOpen] = useState(null); // Initialize the state for openning modal
  const [isMenuOpen, setMenuOpen] = useState(false); // Initialize the state for openning menu

  // Create a weekday
  const dateStr = date.toLocaleDateString();
  const currentYear = date.getFullYear();
  const dayIdx = date.getDay();
  const today = dayNames[dayIdx];

  // Event handler for toggling menu
  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };
  // Effect hook for updating date and time continuously
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date().toLocaleTimeString([], options));
    }, 100);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }); // Empty dependency array ensures the effect runs only once

  // Rendering the application UI
  return (
    <div className="App">
      <Router>
        {/* <Header className="to-do-header" /> */}
        <CustomMainContainer className="to-do-main-container">
          <CustomMenuContainer
            className="to-do-menu-container"
            onClick={handleMenuOpen}
            isMenuOpen={isMenuOpen}
            modalOpen={modalOpen}
            data-testid="menu-container"
          />
          <CustomDateAndTimeContainer
            classNameDateAndTimeContainer={`to-do-date-and-time-container ${
              isMenuOpen ? "open" : "closed"
            }`}
            data-testid="date-time-container"
          >
            <CustomTextHeading
              className="to-do-main-text-heading-week-day"
              children={today}
              h1
              data-testid="week-day"
            />
            <CustomTextHeading
              className="to-do-main-text-heading-date"
              children={dateStr}
              h5
              data-testid="date"
            />
            <CustomTextHeading
              className="to-do-main-text-heading-time"
              children={time}
              h5
              data-testid="time"
            />
          </CustomDateAndTimeContainer>

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  isMenuOpen={isMenuOpen}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                />
              }
            />
            <Route path="/upcomming" element={<Upcoming />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/note" element={<Note />} />
          </Routes>
        </CustomMainContainer>

        <Footer
          className="to-do-footer-paragraph"
          currentYear={currentYear}
          data-testid="footer"
        />
      </Router>
    </div>
  );
}

export default React.memo(App);
