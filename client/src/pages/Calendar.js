import React from "react";

function Calendar(props) {
  return (
    <section className={props.className}>
      {/* Make a realistic calendar with functions, such as adding events and their description. Each event shows on specific date and time */}
      <div className="calendar-container">
        <div className="calendar-form">
          <h1>Calendar</h1>
          <form>
            {/* Event Name */}
            <div className="form-group">
              <label htmlFor="event-name">Event Name</label>
              <input
                type="text"
                id="event-name"
                name="event-name"
                placeholder="Event Name"
              />
            </div>

            {/* Event Description */}
            <div className="form-group">
              <label htmlFor="event-description">Event Description</label>
              <input
                type="text"
                id="event-description"
                name="event-description"
                placeholder="Event Description"
              />
            </div>

            {/* Event Date */}
            <div className="form-group">
              <label htmlFor="event-date">Event Date</label>
              <input
                type="date"
                id="event-date"
                name="event-date"
                placeholder="Event Date"
              />
            </div>

            {/* Event Time */}
            <div className="form-group">
              <label htmlFor="event-time">Event Time</label>
              <input
                type="time"
                id="event-time"
                name="event-time"
                placeholder="Event Time"
              />
            </div>

            {/* Add Event Button */}
            <div className="form-group">
              <button type="submit">Add Event</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Calendar);
