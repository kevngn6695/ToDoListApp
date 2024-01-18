import "../assets/style/css/main/footer.css";

import React from "react";

function Footer(props) {
  return (
    <footer>
      <p className={props.className}>
        Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default React.memo(Footer);
