import "../assets/style/css/components/customclosesymbol.css";

function CustomCloseSymbol(props) {
  return (
    <>
      <span className={props.className}></span>
      <span className={props.className}></span>
    </>
  );
}

export default CustomCloseSymbol;
