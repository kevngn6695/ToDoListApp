import "../assets/style/css/components/customtextinput.css";

import React from "react";

import PropTypes from "prop-types";

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

CustomTextInput.propTypes = {
  classNameForm: PropTypes.string,
  classNameInput: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default React.memo(CustomTextInput);
