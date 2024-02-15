import "../assets/style/css/main/footer.css";

import React from "react";

import { FooterProps } from "../utils/propType";

function Footer(props) {
  return (
    <footer>
      <p className={props.className}>
        Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}

Footer.propTypes = FooterProps;

export default React.memo(Footer);
