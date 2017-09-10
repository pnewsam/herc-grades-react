import React from "react";
import { formatName } from "../../utils/nameFormatterUtil";

const Seat = (props) => {
  let s;
  if (props.student) {
    s = formatName(props.student.name);
  } else {
    s = 'Empty';
  }
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

export default Seat;