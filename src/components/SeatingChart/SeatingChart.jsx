import React from "react";
import Seat from "./Seat";
import SeatRow from "./SeatRow";

const SeatingChart = (props) => {
  return(
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        {Object.entries(props.seats).map(row=>{
          return(
            <SeatRow key={row[0]}>
              {Object.entries(row[1]).map(seat=>{
                return(
                  <Seat key={`${row[0]}${seat[0]}`} student={seat[1]} width={props.seatWidth}/>
                )
              })}
            </SeatRow>
          )
        })}
      </div>
    </div>
  )
}

export default SeatingChart;