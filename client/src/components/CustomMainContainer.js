import "../assets/style/css/components/custommaincontainer.css";
function CustomMainContainer(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default CustomMainContainer;
