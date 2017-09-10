import React from "react";

const Seat = (props) => {
  let s;
  if (props.studentName) {
    s = props.studentName;
    return(
      <div
        id={props.coords}
        style={{
          backgroundColor: "#3273DC",
          color: "white",
          display: "table",
          textAlign: "center",
          border: "solid 2px grey",
          margin: "0 5px",
          height: `${props.width}px`,
          width: `${props.width}px`
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
  } else {
    s = props.coords;
    return(
      <div
        id={props.coords}
        style={{
          display: "table",
          textAlign: "center",
          border: "solid 2px grey",
          margin: "0 5px",
          height: `${props.width}px`,
          width: `${props.width}px`
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


  }

export default Seat;