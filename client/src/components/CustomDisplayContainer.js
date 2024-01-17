import "../assets/style/css/components/customdisplaycontainer.css";

function CustomDisplayContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default CustomDisplayContainer;
