import React from "react";
import Seat from "./Seat";

const SeatingChart = (props) => {
  return(
    <form>
      {Object.entries(props.seats).map(s=>(
        <Seat key={s[1]} coords={s[0]} studentId={s[1]} />
      ))}
    </form>
  )
}

export default SeatingChart;