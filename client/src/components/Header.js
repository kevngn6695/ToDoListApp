import "../assets/style/css/header.css";

function Header({ className, children }) {
  return <header className={className}>{children}</header>;
}

export default Header;
