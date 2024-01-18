import "../assets/style/css/components/customeditmodal.css";

import CustomModalContainer from "./CustomModalContainer";

import React, { useEffect, useState } from "react";

import { capitalizeFirst } from "../services/capitalizeFirst";

function CustomEditModal(props) {
  const [todos, setTodo] = useState([]);
  const [open, setOpen] = useState(null);

  const toggleDiv = (divName) => {
    setOpen((prevopen) => (prevopen === divName ? null : divName));
  };

  const customModalContainerProps = {
    className: "to-do-modal-container",
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

  useEffect(() => {
    const id = setInterval(() => {
      getTodo();
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [todos]);

  const handleOutsideClick = (e) => {
    if (open && e.target.closest(".to-do-main-container") === null) {
      setOpen(null);
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

  return (
    <>
      <div className={props.className}>
        {todos.map((todo) => (
          <>
            <div
              className={props.classNameModal}
              onClick={() => toggleDiv(todo.todo_id)}
              onDragStart={(e) => handleDragStart(e, todo.todo_id)}
              draggable
              key={todo.todo_id}
            >
              {capitalizeFirst(todo.description)}
            </div>
          </>
        ))}

        {todos.map((todo) => (
          <React.Fragment key={todo.todo_id}>
            {open === todo.todo_id && (
              <CustomModalContainer
                {...customModalContainerProps}
                description={todo.description}
                // onDelete={() => handelDeleteItem(todo.todo_id)}
                onClose={() => setOpen(null)}
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

export default React.memo(CustomEditModal);
