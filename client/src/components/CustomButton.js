import "../assets/style/css/components/custombutton.css";

function CustomButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default CustomButton;
