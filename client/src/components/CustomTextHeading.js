import "../assets/style/css/components/customtextheading.css";

function CustomTextHeading(props) {
  return <h1 className={props.className}>{props.children}</h1>;
}

export default CustomTextHeading;
