import React from "react";

function Profile(props) {
  return <div className={props.className}>Profile</div>;
}

export default React.memo(Profile);
