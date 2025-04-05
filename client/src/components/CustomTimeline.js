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
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("week"); // week, month, day
  const [hourHeight, setHourHeight] = useState(60);
  const timelineRef = useRef(null);
  const hoursRef = useRef(null);

  const curDateInfo = getCurrentDate();
  const curMonthName = getMonthNames(currentDate.month);
  const curDayName = getWeekDayNames(currentDate.day);

  const generateTimeSlots = () => {
    const slots = [];

    if (viewMode === "day") {
      for (let hour = 6; hour <= 22; hour++) {
        slots.push({
          time: new Date(currentDate),
          label:
            hour === 12
              ? "12 PM"
              : hour > 12
              ? `${hour - 12} PM`
              : `${hour} AM`,
          isCur:
            hour === new Date().getHours() &&
            areDatesEqual(currentDate, new Date()),
        });
      }
    } else if (viewMode === "week") {
      const weekStart = addDays(currentDate, -currentDate.day + 1);
      for (let i = 0; i < 7; i++) {
        const day = addDays(currentDate);
        slots.push({
          time: day,
          label: `${getWeekDayNames(day.getDay())} ${formatDatev1(day)}`,
          isCur: areDatesEqual(weekStart, new Date()),
        });
      }
    } else {
      const firstDay = getFirstDayOfMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
      );
      const daysInMonth = getDaysInMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
      );
      let date = 1;

      for (let i = 0; i < 6; i++) {
        if (date > daysInMonth) break;
        const weekStart = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          date,
        );

        slots.push({
          time: weekStart,
          label: `Week ${i + 1} ${formatDatev1(weekStart)}`,
          isCur: false,
        });

        date += 7;
      }
    }
    return slots;
  };

  // Generate days for the timeline header
  const generateTimelineDays = () => {
    const days = [];

    if (viewMode === "day") {
      // Single day columns (hours)
      for (let hour = 6; hour <= 22; hour++) {
        const date = new Date(currentDate);
        date.setHours(hour, 0, 0, 0);
        days.push({
          date,
          label:
            hour === 12
              ? "12 PM"
              : hour > 12
              ? `${hour - 12} PM`
              : `${hour} AM`,
          width: hourHeight,
        });
      }
    } else if (viewMode === "week") {
      // Week columns (days)
      const weekStart = addDays(currentDate, -currentDate.getDay());
      for (let i = 0; i < 7; i++) {
        const day = addDays(weekStart, i);
        days.push({
          date: day,
          label: `${getWeekDayNames(day.getDay()).substr(
            0,
            3,
          )} ${day.getDate()}`,
          width: 120,
          isCurrent: areDatesEqual(day, new Date()),
        });
      }
    } else {
      // Month columns (days)
      const daysInMonth = getDaysInMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
      );
      for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          i,
        );
        days.push({
          date: day,
          label: i,
          width: 40,
          isCurrent: areDatesEqual(day, new Date()),
        });
      }
    }

    return days;
  };
  // Calculate task position
  const calculateTaskPosition = (task) => {
    const start = new Date(task.start);
    const end = new Date(task.end);
    const days = generateTimelineDays();

    // Find column indices
    const startCol = days.findIndex(
      (day) => areDatesEqual(day.date, start) || day.date > start,
    );
    const endCol = days.findIndex(
      (day) => areDatesEqual(day.date, end) || day.date > end,
    );

    if (startCol === -1 || endCol === -1) return null;

    // Calculate position
    const left = days
      .slice(0, startCol)
      .reduce((sum, day) => sum + day.width, 0);
    const width = days
      .slice(startCol, endCol)
      .reduce((sum, day) => sum + day.width, 0);

    // Calculate vertical position (time of day)
    let top = 0;
    let height = hourHeight;

    if (viewMode === "day") {
      top = (start.getHours() - 6 + start.getMinutes() / 60) * hourHeight;
      height = ((end - start) / (1000 * 60 * 60)) * hourHeight;
    }

    return {
      left,
      width,
      top,
      height,
    };
  };

  // Handle navigation
  const navigateTimeline = (direction) => {
    if (viewMode === "day") {
      setCurrentDate(addDays(currentDate, direction === "next" ? 1 : -1));
    } else if (viewMode === "week") {
      setCurrentDate(addDays(currentDate, direction === "next" ? 7 : -7));
    } else {
      setCurrentDate(addMonths(currentDate, direction === "next" ? 1 : -1));
    }
  };

  // Scroll to current time
  const scrollToCurrentTime = () => {
    if (timelineRef.current && viewMode === "day") {
      const currentHour = new Date().getHours();
      const scrollPosition = (currentHour - 6) * hourHeight - 100;
      timelineRef.current.scrollTop = scrollPosition;
    }
  };

  // Sync scroll between hours and timeline
  const handleTimelineScroll = (e) => {
    if (hoursRef.current && viewMode === "day") {
      hoursRef.current.scrollTop = e.target.scrollTop;
    }
  };

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
            <div className="timeline-view-mode">
              <button
                className={`timeline-view-mode-btn ${
                  viewMode === "day" ? "active" : ""
                }`}
                onClick={() => setViewMode("day")}
              >
                Day
              </button>
              <button
                className={`timeline-view-mode-btn ${
                  viewMode === "week" ? "active" : ""
                }`}
                onClick={() => setViewMode("week")}
              >
                Week
              </button>
              <button
                className={`timeline-view-mode-btn ${
                  viewMode === "month" ? "active" : ""
                }`}
                onClick={() => setViewMode("month")}
              >
                Month
              </button>
            </div>
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
