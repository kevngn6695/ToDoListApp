// Importing the custom edit modal styles from the CSS file.
import "../assets/style/css/components/customeditmodal.css";

// Importing CustomModalContainer component for managing modal content.
import CustomModalContainer from "./CustomModalContainer";

// Importing React and useEffect, useState hooks for managing component state and side effects.
import React, { useEffect, useState } from "react";

// Importing utility function for capitalizing the first letter of a string.
import { capitalizeFirst } from "../services/capitalizeFirst";

// Importing PropTypes for defining the type of props.
import { CustomEditModalProps } from "../utils/propType";

// Functional component for rendering an edit modal for todos.
function CustomEditModal(props) {
  // State variables for managing todos and modal open/close state.
  const [todos, setTodo] = useState([]);
  const [open, setOpen] = useState(null);

  // Function to toggle visibility of modal and setModalOpen prop.
  const toggleDiv = (divName) => {
    setOpen((prevopen) => (prevopen === divName ? null : divName));
    props.setModalOpen((prevopen) => (prevopen === divName ? null : divName));
  };

  // Function to fetch todos from the API.
  const getTodo = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const allTodo = await res.json();

      setTodo(allTodo);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Function to handle clicks outside of the modal container.
  const handleOutsideClick = (e) => {
    if (open && e.target.closest(".to-do-main-container") === null) {
      setOpen(null);
      props.setModalOpen(false);
    }
  };

  // Function to handle drag start event for todos.
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  // Effect hook to add and remove click event listener for outside clicks.
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  // Effect hook to fetch todos at regular intervals.
  useEffect(() => {
    const id = setInterval(() => {
      getTodo();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [todos]);

  // Rendering the edit modal with todos and modal containers.
  return (
    <>
      <div className={props.className}>
        {todos.map((todo) => (
          <div className={props.classNameContainer}>
            <div
              className={props.classNameModal}
              onClick={() => toggleDiv(todo.todo_id)}
              onDragStart={(e) => handleDragStart(e, todo.todo_id)}
              draggable
              key={todo.todo_id}
            >
              {capitalizeFirst(todo.description)}
            </div>
          </div>
        ))}

        {todos.map((todo) => (
          <React.Fragment key={todo.todo_id}>
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
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

// Assigning PropTypes to the CustomEditModal component.
CustomEditModal.propTypes = CustomEditModalProps;

// Exporting the CustomEditModal component wrapped in React.memo for performance optimization.
export default React.memo(CustomEditModal);
