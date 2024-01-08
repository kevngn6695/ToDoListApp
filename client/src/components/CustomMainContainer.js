import "../assets/style/css/components/custommaincontainer.css";
function CustomMainContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default CustomMainContainer;
