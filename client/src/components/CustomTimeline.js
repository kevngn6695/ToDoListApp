import React from "react";

function CustomTimeline(props) {
  return (
    <section className="timeline-container">
      <div className="timeline-header">
        <h2>Timeline</h2>
      </div>
      <div className="timeline-content">
        {/* Timeline items will be rendered here */}
        {props.items && props.items.length > 0 ? (
          props.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-content">
                <span className="timeline-item-date">{item.date}</span>
                <span className="timeline-item-time">{item.time}</span>
                <p>{item.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No timeline items available.</p>
        )}
      </div>
    </section>
  );
}

export default React.memo(CustomTimeline);
