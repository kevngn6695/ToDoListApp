import "../assets/style/css/components/customeditmodal.sass";

import React, { Fragment, useEffect, useState } from "react";

import { capitalizeFirst } from "../services/capitalizefirst";

import { CustomEditModalProps } from "../utils/proptype";

function CustomEditModal(props) {
  const [todos, setTodo] = useState([]);

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

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

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
          <div key={todo.todo_id}>
            <div
              className={props.classNameModal}
              onClick={() => props.toggleDiv(todo.todo_id)}
              onDragStart={(e) => handleDragStart(e, todo.todo_id)}
              draggable
            >
              <div className={props.classNameDescriptionContainer}>
                {capitalizeFirst(todo.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

CustomEditModal.propTypes = CustomEditModalProps;

export default React.memo(CustomEditModal);
