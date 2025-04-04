import React from "react";
import TimeLine from "../components/CustomTimeline";

function Calendar(props) {
  return (
    <section className={props.className}>
      {/* Create a calendar timeline with date and time for review */}
      <TimeLine className="gantt-timeline" />
    </section>
  );
}

export default React.memo(Calendar);
