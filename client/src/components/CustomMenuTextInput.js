import "../assets/style/css/components/custommenutextinput.css";

function CustomMenuTextInput(props) {
  return (
    <form className={props.classNameForm}>
      <input
        className={props.classNameInput}
        type={props.text}
        placeholder={props.placeholder}
      />
    </form>
  );
}

export default CustomMenuTextInput;
