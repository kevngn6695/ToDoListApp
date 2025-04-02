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
} from "../utils/date";

function ProfessionalTimeline({ className, initialTasks = [] }) {
  // State management
  const [tasks, setTasks] = useState(initialTasks);
  const [viewMode, setViewMode] = useState("week"); // 'day', 'week', 'month'
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTask, setSelectedTask] = useState(null);
  const timelineRef = useRef(null);
  const headerRef = useRef(null);

  // Derived date values using your utility functions
  const currentDateObj = getCurrentDate();
  const monthName = getMonthNames(currentDateObj.month);
  const weekDayName = getWeekDayNames(currentDate.getDay());

  // Generate timeline columns based on view mode
  const generateTimelineColumns = () => {
    const columns = [];
    const startDate = new Date(currentDate);

    if (viewMode === "day") {
      startDate.setHours(0, 0, 0, 0);
      columns.push({
        date: new Date(startDate),
        label: `${weekDayName}, ${formatDatev1(startDate)}`,
        width: 120,
      });
    } else if (viewMode === "week") {
      // Find Sunday of the current week
      startDate.setDate(startDate.getDate() - startDate.getDay());

      for (let i = 0; i < 7; i++) {
        const date = addDays(startDate, i);
        columns.push({
          date: new Date(date),
          label: `${getWeekDayNames(date.getDay()).substring(
            0,
            3,
          )} ${date.getDate()}`,
          width: 100,
        });
      }
    } else {
      // month view
      const daysInMonth = getDaysInMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
      );
      const firstDay = getFirstDayOfMonth(
        currentDate.getFullYear(),
        currentDate.getMonth(),
      );

      // Add days from previous month
      const prevMonthEnd = addMonths(currentDate, -1);
      prevMonthEnd.setDate(
        getDaysInMonth(prevMonthEnd.getFullYear(), prevMonthEnd.getMonth()),
      );

      for (let i = firstDay - 1; i >= 0; i--) {
        const date = addDays(prevMonthEnd, -i);
        columns.push({
          date,
          label: date.getDate(),
          width: 40,
          isOtherMonth: true,
        });
      }

      // Add current month days
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          i,
        );
        columns.push({
          date,
          label: i,
          width: 40,
          isCurrent: areDatesEqual(date, new Date()),
        });
      }

      // Add days from next month
      const daysToAdd = 42 - columns.length; // 6 weeks
      for (let i = 1; i <= daysToAdd; i++) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          i,
        );
        columns.push({
          date,
          label: date.getDate(),
          width: 40,
          isOtherMonth: true,
        });
      }
    }

    return columns;
  };

  // Calculate task position and dimensions
  const calculateTaskPosition = (task) => {
    const startDate = new Date(task.start);
    const endDate = new Date(task.end);
    const columns = generateTimelineColumns();

    // Find column indices for start and end dates
    const startIndex = columns.findIndex(
      (col) => areDatesEqual(col.date, startDate) || col.date > startDate,
    );
    const endIndex = columns.findIndex(
      (col) => areDatesEqual(col.date, endDate) || col.date > endDate,
    );

    if (startIndex === -1 || endIndex === -1) return null;

    // Calculate position
    const left = columns
      .slice(0, startIndex)
      .reduce((sum, col) => sum + col.width, 0);
    const width = columns
      .slice(startIndex, endIndex)
      .reduce((sum, col) => sum + col.width, 0);

    return { left, width };
  };

  // Handle navigation
  const navigateTimeline = (direction) => {
    const newDate = new Date(currentDate);

    if (viewMode === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
    }

    setCurrentDate(newDate);
  };

  // Handle scroll synchronization
  const handleTimelineScroll = (e) => {
    if (headerRef.current) {
      headerRef.current.scrollLeft = e.target.scrollLeft;
    }
  };

  // Generate timeline columns
  const timelineColumns = generateTimelineColumns();

  return (
    <section className={`professional-timeline ${className || ""}`}>
      {/* Timeline controls */}
      <div className="timeline-controls">
        <button onClick={() => navigateTimeline("prev")} className="nav-button">
          &lt;
        </button>

        <div className="view-controls">
          <button
            className={`view-button ${viewMode === "day" ? "active" : ""}`}
            onClick={() => setViewMode("day")}
          >
            Day
          </button>
          <button
            className={`view-button ${viewMode === "week" ? "active" : ""}`}
            onClick={() => setViewMode("week")}
          >
            Week
          </button>
          <button
            className={`view-button ${viewMode === "month" ? "active" : ""}`}
            onClick={() => setViewMode("month")}
          >
            Month
          </button>
        </div>

        <button onClick={() => navigateTimeline("next")} className="nav-button">
          &gt;
        </button>

        <div className="current-period">
          {viewMode === "day" && formatDatev1(currentDate)}
          {viewMode === "week" &&
            `${formatDatev1(getWeekStart(currentDate))} - ${formatDatev1(
              getWeekEnd(currentDate),
            )}`}
          {viewMode === "month" && `${monthName} ${currentDate.getFullYear()}`}
        </div>
      </div>

      {/* Timeline header */}
      <div className="timeline-header" ref={headerRef}>
        <div className="tasks-header">Tasks</div>
        <div className="dates-header">
          {timelineColumns.map((col, index) => (
            <div
              key={index}
              className={`date-column ${col.isCurrent ? "current" : ""} ${
                col.isOtherMonth ? "other-month" : ""
              }`}
              style={{ width: `${col.width}px` }}
            >
              {col.label}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline body */}
      <div className="timeline-body">
        {/* Tasks list */}
        <div className="tasks-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-row ${
                selectedTask === task.id ? "selected" : ""
              }`}
              onClick={() => setSelectedTask(task.id)}
            >
              <div className="task-name">{task.name}</div>
              <div className="task-dates">
                {formatDatev2(new Date(task.start))} -{" "}
                {formatDatev2(new Date(task.end))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div
          className="timeline-grid"
          ref={timelineRef}
          onScroll={handleTimelineScroll}
        >
          {/* Grid columns */}
          <div className="grid-columns">
            {timelineColumns.map((_, index) => (
              <div
                key={index}
                className="grid-column"
                style={{ width: `${timelineColumns[index].width}px` }}
              ></div>
            ))}
          </div>

          {/* Current time indicator (for day view) */}
          {viewMode === "day" && (
            <div
              className="current-time-indicator"
              style={{
                left: `${
                  (currentDate.getHours() * 60 + currentDate.getMinutes()) *
                  (120 / 1440)
                }px`,
              }}
            ></div>
          )}

          {/* Tasks on timeline */}
          <div className="timeline-tasks">
            {tasks.map((task) => {
              const position = calculateTaskPosition(task);
              if (!position) return null;

              return (
                <div
                  key={task.id}
                  className={`timeline-task ${
                    selectedTask === task.id ? "selected" : ""
                  }`}
                  style={{
                    left: `${position.left}px`,
                    width: `${position.width}px`,
                    backgroundColor: task.color || "#4a90e2",
                  }}
                  onClick={() => setSelectedTask(task.id)}
                >
                  <div className="task-label">
                    {task.name}
                    {position.width > 100 && (
                      <span className="task-time">
                        {formatTimev1(new Date(task.start))} -{" "}
                        {formatTimev2(new Date(task.end))}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper functions
function getWeekStart(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function getWeekEnd(date) {
  const d = new Date(date);
  d.setDate(d.getDate() + (6 - d.getDay()));
  return d;
}

export default React.memo(ProfessionalTimeline);
