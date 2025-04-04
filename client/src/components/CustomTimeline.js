import React, { useState, useEffect, useRef } from "react";
import "../assets/style/css/components/customtimeline.sass";
import {
  getWeekDayNames,
  getDaysInMonth,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getCurrentDate,
  getMonthNames,
  areDatesEqual,
  formatDatev1,
  formatDatev2,
  formatTimev1,
  formatTimev2,
  addDays,
  addMonths,
  getWeekEnd,
  getWeekStart,
} from "../utils/date";

function CustomTimeline(props) {
  // State management

  return (
    <section className={props.className}>
      <div className="timeline-title-container">
        <h2 className="timeline-title">Timeline</h2>
        <h2 className="timeline-proj-title">Project X</h2>
      </div>
      <div>
        <div className="timeline-view-controls-container">
          <div className="timeline-view-ctrl">
            <button className="timeline-prev-btn">prev</button>
            <div className="timeline-view-mode"></div>
            <button className="timeline-next-btn">next</button>
          </div>
        </div>
        <div className="timeline-filter-controls-container"></div>
      </div>

      <div className="timeline-view-container">
        {/* Month */}

        {/* Day and week columns */}

        {/* Hour rows */}
      </div>
    </section>
  );
}

export default React.memo(CustomTimeline);
