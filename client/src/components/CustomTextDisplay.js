// Importing React for JSX syntax and basic functionality.
import React, { Fragment, useState, useEffect } from "react";

// Importing components for displaying text with editing capabilities.
import CustomEditModal from "./CustomEditModal";
import CustomModalContainer from "./CustomModalContainer";

import { capitalizeFirst } from "../services/capitalizefirst";

// Importing the custom text display styles from the CSS file.
import "../assets/style/css/components/customtextdisplay.sass";

// Importing PropTypes for defining the type of props.
import { CustomTextDisplayProps } from "../utils/proptype";

import { getTodo } from "../utils/fetch";

// Functional component for rendering a custom text display with editing capabilities.
function CustomTextDisplay(props) {
  const [todos, setTodo] = useState([]);
  const [open, setOpen] = useState(null);

  const toggleDiv = (divName) => {
    setOpen((prevopen) => (prevopen === divName ? null : divName));
    props.setModalOpen((prevopen) => (prevopen === divName ? null : divName));
  };

  const handleOutsideClick = (e) => {
    if (open && e.target.closest(".to-do-main-container") === null) {
      setOpen(null);
      props.setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    const id = setInterval(() => {
      getTodo(setTodo);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [todos]);

  // Rendering the CustomEditModal component with provided props.
  return (
    <>
      <CustomEditModal
        className={props.classNameContainer}
        classNameModal={props.classNameModal}
        classNameDescriptionContainer={props.classNameDescriptionContainer}
        modalOpen={props.modalOpen}
        setModalOpen={props.setModalOpen}
        toggleDiv={toggleDiv}
      />

      {todos.map((todo) => (
        <Fragment key={todo.todo_id}>
          {open === todo.todo_id && (
            <CustomModalContainer
              className="to-do-modal-container"
              description={todo.description}
              onClose={() => setOpen(null)}
              setModalOpen={props.setModalOpen}
              todoId={todo.todo_id}
            >
              {capitalizeFirst(todo.description)}
            </CustomModalContainer>
          )}
        </Fragment>
      ))}
    </>
  );
}

// Assigning PropTypes to the CustomTextDisplay component.
CustomTextDisplay.propTypes = CustomTextDisplayProps;

// Exporting the CustomTextDisplay component wrapped in React.memo for performance optimization.
export default React.memo(CustomTextDisplay);
