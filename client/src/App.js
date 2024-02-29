// Importing CSS file for styling
import "./assets/style/css/main/app.sass";

// Importing React and necessary hooks
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import navigation pages
import Home from "./pages/Home";
import Upcoming from "./pages/Upcomming";
import Calendar from "./pages/Calendar";
import Notes from "./pages/Note";

/**
 * Main element representing the To-Do list application.
 * @returns the view of the To-Do list application.
 */
function App() {
  // Rendering the application UI
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/upcomming" element={<Upcoming />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default React.memo(App);
