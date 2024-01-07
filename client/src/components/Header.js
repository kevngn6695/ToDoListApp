import "../assets/style/css/main/header.css";

function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

export default Header;
