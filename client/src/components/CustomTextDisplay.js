import "../assets/style/css/customtextdisplay.css";

function CustomTextDisplay({ className, children }) {
  return <ul className={className}>{children}</ul>;
}

export default CustomTextDisplay;
