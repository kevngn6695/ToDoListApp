import "../assets/style/css/components/customtextinput.css";
import { useState } from "react";

function CustomTextInput(props) {
  const [description, setDescription] = useState("");

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(res);
    } catch (err) {
      console.err(err.message);
    }
  };

  return (
    <form className={props.classNameForm} onSubmit={handleOnSubmit}>
      <input
        className={props.classNameInput}
        type={props.type}
        placeholder={props.placeholder}
        value={description}
        onChange={handleOnChange}
      />
      {/* <span className="to-do-add-sign"></span> */}
    </form>
  );
}

export default CustomTextInput;
