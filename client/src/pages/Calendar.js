import React from "react";

function Calendar(props) {
  return (
    <section className={props.className}>
      {/* Create a calendar timeline with date and time for review */}
      <div className="calendar-timeline"></div>
    </section>
  );
}

export default React.memo(Calendar);
