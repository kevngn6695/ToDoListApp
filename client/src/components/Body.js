import "../assets/style/css/main/body.css";

function Body({ className, children }) {
  return <body className={className}>{children}</body>;
}

export default Body;
