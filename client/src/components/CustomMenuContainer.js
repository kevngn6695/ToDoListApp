import "../assets/style/css/components/custommenucontainer.css";

function CustomMenuContainer(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default CustomMenuContainer;
