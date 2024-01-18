import "../assets/style/css/components/customtextinput.css";

import React from "react";

function CustomTextInput(props) {
  return (
    <form className={props.classNameForm} onSubmit={props.onSubmit}>
      <input
        className={props.classNameInput}
        type={props.type}
        placeholder={props.placeholder}
        value={props.description}
        onChange={props.onChange}
      />
      {/* <span className="to-do-add-sign"></span> */}
    </form>
  );
}

export default React.memo(CustomTextInput);
