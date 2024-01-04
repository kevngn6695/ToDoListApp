import "../assets/style/css/components/customtextheading.css";

function CustomHeader({ className, children }) {
  return (
    <div className={className}>
      <h1>{children}</h1>
    </div>
  );
}

export default CustomHeader;
