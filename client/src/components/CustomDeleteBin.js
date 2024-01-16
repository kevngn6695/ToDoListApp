import "../assets/style/css/components/customdeletebin.css";

import { useState } from "react";

import Lottie from "react-lottie";

import recycleBinHover from "../assets/media/images/icons/json/recycle-bin.json";

function CustomDeleteBin(props) {
  const [todos, setTodo] = useState([]);
  const [isDraggable, setIsDraggable] = useState(false);

  const handelDeleteItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodo(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
    handelDeleteItem(id);
    setIsDraggable(false);
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: recycleBinHover,
  };

  return (
    <div
      className={`${props.className} ${isDraggable ? "draggable" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragDrop}
    >
      <Lottie
        options={defaultOptions}
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
}

export default CustomDeleteBin;
