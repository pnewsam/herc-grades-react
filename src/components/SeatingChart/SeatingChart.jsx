import React from "react";
import Seat from "./Seat";

const SeatingChart = (props) => {
  
  return(
    <form>
      {Object.entries(props.seats).map(seat=>{
        let student = props.students[seat[1]]
        return(
          <Seat key={seat[0]} coords={seat[0]} student={student} />
        )
      })}
    </form>
  )
}

export default SeatingChart;