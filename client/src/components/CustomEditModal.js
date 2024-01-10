import "../assets/style/css/components/customeditmodal.css";

import CustomModalContainer from "./CustomModalContainer";

import React, { useEffect, useState } from "react";

function CustomEditModal(props) {
  const [todos, setTodo] = useState([]);
  const [open, setopen] = useState(null);

  const toggleDiv = (divName) => {
    setopen((prevopen) => (prevopen === divName ? null : divName));
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

  const handelDeleteItem = async (id) => {
    try {
      const deleteItem = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodo(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      getTodo();
    }, 100);

    return () => clearInterval(id);
  }, [todos]);

  return (
    <div className={props.className}>
      {todos.map((todo) => (
        <>
          <div
            className={props.classNameModal}
            onClick={() => toggleDiv(todo.todo_id)}
            key={todo.todo_id}
          >
            {todo.description}
          </div>
        </>
      ))}

      {todos.map((todo) => (
        <React.Fragment key={todo.todo_id}>
          {open === todo.todo_id && (
            <CustomModalContainer
              {...customModalContainerProps}
              description={todo.description}
              onDelete={() => handelDeleteItem(todo.todo_id)}
            >
              {todo.description}
            </CustomModalContainer>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CustomEditModal;
