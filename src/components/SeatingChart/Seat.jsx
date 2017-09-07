import React from "react";

const Seat = (props) => {
  let seatWidth = 100;
  let row = props.coords.charAt(0);
  let col = props.coords.charAt(1);
  let numRows = 4;

  let x = (col * seatWidth + col * 10 + 5).toString() + 'px';
  let y = ((numRows - 1 - row) * seatWidth + (numRows - 1 - row) * 10 + 5).toString() + 'px';
  let s = props.studentId;
  return(
    <div
      id="seat-${id}"
      className="seating-chart__seat"
      style={{
        position: "absolute",
        display: "table",
        textAlign: "center",
        border: "solid 2px grey",
        height: `${seatWidth}px`,
        width: `${seatWidth}px`,
        transform: `translateX(${x}) translateY(${y})`
      }}
    >
      <span
        style={{
          display: "table-cell",
          verticalAlign: "middle"
        }}
      >
        {s}
      </span>
    </div>
    )

  }

export default Seat;