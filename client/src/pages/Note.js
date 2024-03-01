import React from "react";

function Note(props) {
  return <section className={props.className}>Note</section>;
}

export default React.memo(Note);
