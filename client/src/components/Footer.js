import "../assets/style/css/main/footer.css";

import React from "react";

import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer>
      <p className={props.className}>
        Copyright &copy; 2020-{props.currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Footer);
