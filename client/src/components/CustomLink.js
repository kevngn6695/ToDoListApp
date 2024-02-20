import React from "react";

import { CustomLinkProps } from "../utils/proptype";

import "../assets/style/css/components/customlink.css";

function CustomLink(props) {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

CustomLink.propTypes = CustomLinkProps;

export default React.memo(CustomLink);
