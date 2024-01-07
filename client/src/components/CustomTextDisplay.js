import "../assets/style/css/components/customtextdisplay.css";
import { useState, useEffect } from "react";
import CustomEditModal from "./CustomEditModal";

function CustomTextDisplay(props) {
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

  useEffect(() => {
    const id = setInterval(() => {
      getTodo();
    }, 100);

    return () => clearInterval(id);
  }, [todos]);

  return (
    <section className={props.classNameContainer}>
      {todos.map((todo) => (
        <div>
          <button>{todo.description}</button>
        </div>
      ))}
    </section>
  );
}

export default CustomTextDisplay;
