import "../assets/style/css/components/custommodalcontainer.css";
function CustomModalContainer(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default CustomModalContainer;
