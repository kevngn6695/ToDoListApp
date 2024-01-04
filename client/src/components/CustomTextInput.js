import "../assets/style/css/components/customtextinput.css";

function CustomTextInput({ className, type }) {
  return (
    <div className={className}>
      <input type={type} />
    </div>
  );
}

export default CustomTextInput;
