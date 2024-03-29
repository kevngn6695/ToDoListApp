// Importing the custom delete bin styles from the CSS file.
import "../assets/style/css/components/customdeletebin.sass";

// Importing React for JSX syntax and basic functionality, and useState hook for managing component state.
import React, { useState } from "react";

import { handleDeleteItem } from "../utils/fetch";

// Importing PropTypes for defining the type of props.
import { CustomDeleteBinProps } from "../utils/proptype";

// Importing the delete icon image.
import deleteIcon from "../assets/media/images/icons/icons/delete.png";

// Functional component for rendering a custom delete bin.
function CustomDeleteBin(props) {
  // State variables for managing todos and draggable state.
  const [todos, setTodo] = useState([]);
  const [isDraggable, setIsDraggable] = useState(false);

  // Functions for handling drag and drop events.
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggable(true);
  };

  const handleDragLeave = (e) => {
    setIsDraggable(false);
  };

  const handleDragDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    handleDeleteItem(id, todos, setTodo);
    setIsDraggable(false);
  };

  // Rendering the delete bin with appropriate styling and event handlers.
  return (
    <div
      className={`${props.classNameWrapper} ${isDraggable ? "draggable" : ""}`}
    >
      <div
        className={`${props.className} `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      >
        {/* Displaying the delete icon */}
        <img className="to-do-delete-icon" src={deleteIcon} alt="Delete" />
      </div>
    </div>
  );
}

// Prop type validation for CustomDeleteBin component.
CustomDeleteBin.propTypes = CustomDeleteBinProps;
// Exporting the CustomDeleteBin component wrapped in React.memo for performance optimization.
export default React.memo(CustomDeleteBin);
