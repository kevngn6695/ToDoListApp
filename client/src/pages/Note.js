import React from "react";

import "../assets/style/css/pages/note.sass";

function Note(props) {
  return <section className={props.className}>Note</section>;
}

export default React.memo(Note);
