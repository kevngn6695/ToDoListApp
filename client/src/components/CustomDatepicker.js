import React from "react";

function CustomDatepicker(props) {
  return (
    <div className="datepicker-container">
      <input type="date" className="datepicker" />
    </div>
  );
}

export default React.memo(CustomDatepicker);
