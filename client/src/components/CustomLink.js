import React from "react";

import { CustomLinkProps } from "../utils/propType";

import "../assets/style/css/components/customlink.css";
function CustomLink({ props }) {
  return (
    <div className={props.className}>
      <a>props.children</a>
    </div>
  );
}

CustomLink.propTypes = CustomLinkProps;

export default React.memo(CustomLink);
