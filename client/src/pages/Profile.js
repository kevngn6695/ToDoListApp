import React from "react";

import "../assets/style/css/pages/profile.sass";

function Profile(props) {
  return <div className={props.className}>Profile</div>;
}

export default React.memo(Profile);
