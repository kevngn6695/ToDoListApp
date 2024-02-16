import "../assets/style/css/components/customeditmodal.css";

import CustomModalContainer from "./CustomModalContainer";

import React, { useEffect, useState } from "react";

import { capitalizeFirst } from "../services/capitalizeFirst";

import { CustomEditModalProps } from "../utils/propType";

function CustomEditModal(props) {
  const [todos, setTodo] = useState([]);
  const [open, setOpen] = useState(null);

  const toggleDiv = (divName) => {
    setOpen((prevopen) => (prevopen === divName ? null : divName));
    props.setModalOpen((prevopen) => (prevopen === divName ? null : divName));
  };

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

  const handleOutsideClick = (e) => {
    if (open && e.target.closest(".to-do-main-container") === null) {
      setOpen(null);
      props.setModalOpen(false);
    }
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    const id = setInterval(() => {
      getTodo();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [todos]);

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

CustomEditModal.propTypes = CustomEditModalProps;

export default React.memo(CustomEditModal);
