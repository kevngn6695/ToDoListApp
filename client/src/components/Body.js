import "../assets/style/css/main/body.css";

function Body(props) {
  return <body className={props.className}>{props.children}</body>;
}

export default Body;
