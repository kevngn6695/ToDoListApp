import "../assets/style/css/components/customtextdisplay.css";

function CustomTextDisplay({ className, children }) {
  return (
    <div className={className}>
      <ul>{children}</ul>
    </div>
  );
}

export default CustomTextDisplay;
