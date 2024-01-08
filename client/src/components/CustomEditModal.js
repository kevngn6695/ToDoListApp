import "../assets/style/css/components/customeditmodal.css";

import CustomModalContainer from "./CustomModalContainer";

import { useEffect, useState } from "react";

function CustomEditModal(props) {
  const customModalContainerProps = {
    className: "to-do-modal-container",
  };

  const [todos, setTodo] = useState([]);
  const [open, setopen] = useState(null);

  const toggleDiv = (divName) => {
    setopen((prevopen) => (prevopen === divName ? null : divName));
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
          {open === todo.todo_id && (
            <CustomModalContainer {...customModalContainerProps}>
              {todo.description}
            </CustomModalContainer>
          )}
        </>
      ))}
    </div>
  );
}

export default CustomEditModal;
