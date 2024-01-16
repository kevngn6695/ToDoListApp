import "../assets/style/css/components/customdeletebin.css";

import { useState } from "react";

// import Lottie from "react-lottie";

// import recycleBinHover from "../assets/media/images/icons/json/recycle-bin.json";
import deleteIcon from "../assets/media/images/icons/icons/delete.png";

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

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: false,
  //   animationData: recycleBinHover,
  // };

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
        <img className="to-do-delete-icon" src={deleteIcon} />
      </div>
    </div>
  );
}

export default CustomDeleteBin;
