import React, { useState } from "react";

// Importing main components
// import Header from "../components/Header";
// import Body from "../components/Body";
// import Footer from "../components/Footer";

// Import essential components for customization
// import CustomMainContainer from "../components/CustomMainContainer";
// import CustomMenuContainer from "../components/CustomMenuContainer";
import CustomDisplayContainer from "../components/CustomDisplayContainer";

import CustomTextInput from "../components/CustomTextInput";
import CustomTextDisplay from "../components/CustomTextDisplay";

function Home(props) {
  // Initialize weekday and time objects
  // const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  // const options = {
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: false,
  // };

  // Create a new instance for date and time
  // const newDate = new Date();
  // const newTime = new Date().toLocaleTimeString([], options);

  // State for managing application data
  const [description, setDescription] = useState(""); // Initialize the state for manipulating descriptions from the api
  // const [date, setDate] = useState(newDate); // Initialize the state for date
  // const [time, setTime] = useState(newTime); // Initialize the state for time
  // const [modalOpen, setModalOpen] = useState(null); // Initialize the state for openning modal
  // const [isMenuOpen, setMenuOpen] = useState(false); // Initialize the state for openning menu

  // Create a weekday
  // const dateStr = date.toLocaleDateString();
  // const currentYear = date.getFullYear();
  // const dayIdx = date.getDay();
  // const today = dayNames[dayIdx];

  // Event handler for changing the description of the task
  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  // Event handler for toggling menu
  // const handleMenuOpen = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  // Event handler for creating a new task
  const handleCreateTask = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // Clear input field after successful submission
      if (res.ok) {
        setDescription("");
      }

      console.log(res);
    } catch (err) {
      console.err(err.message);
    }
  };

  // Effect hook for updating date and time continuously
  // useEffect(() => {
  // const intervalId = setInterval(() => {
  // setDate(new Date());
  // setTime(new Date().toLocaleTimeString([], options));
  // }, 100);
  // return () => clearInterval(intervalId); // Cleanup on component unmount
  // }); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <CustomDisplayContainer
        className={`to-do-display-container ${
          props.isMenuOpen ? "open" : "closed"
        }`}
      >
        <CustomTextInput
          classNameForm={`to-do-main-text-input-form ${
            props.modalOpen ? "open" : "closed"
          }`}
          classNameInput={`to-do-main-text-input`}
          type="text"
          placeholder="Add a task"
          onChange={handleOnChangeDescription}
          onSubmit={handleCreateTask}
          description={description}
        />
        <CustomTextDisplay
          classNameDescriptionContainer={`to-do-description-container`}
          classNameContainer={`to-do-text-display-container ${
            props.modalOpen ? "open" : "closed"
          }`}
          classNameModal="to-do-modal"
          modalOpen={props.modalOpen}
          setModalOpen={props.setModalOpen}
        />
      </CustomDisplayContainer>
    </>
  );
}

export default React.memo(Home);
