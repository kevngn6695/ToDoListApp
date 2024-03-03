import React from "react";

import CustomButton from "./CustomButton";

import "../assets/style/css/components/customcontextmenu.sass";

function CustomContextMenu(props) {
  return (
    <section className={props.classNameContextMenuContainer}>
      <div className={props.className} onClick={props.onClick}>
        <CustomButton className={props.classNameBtn}></CustomButton>
        <CustomButton className={props.classNameBtn}></CustomButton>
        <CustomButton className={props.classNameBtn}></CustomButton>
      </div>
    </section>
  );
}

export default React.memo(CustomContextMenu);
