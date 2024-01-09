import "../assets/style/css/components/customdisplaycontainer.css";

function CustomDisplayContainer(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default CustomDisplayContainer;
