import React from "react";

function CustomTypesNav(props) {
  return <ul className={props.classNameList}></ul>;
}

export default React.memo(CustomTypesNav);
