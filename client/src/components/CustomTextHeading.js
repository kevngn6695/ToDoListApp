import "../assets/style/css/components/customtextheading.css";

function CustomTextHeading(props) {
  return (
    <div className={props.className}>
      <h1>{props.dateName}</h1>
    </div>
  );
}

export default CustomTextHeading;
