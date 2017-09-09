import React from "react";
import Seat from "./Seat";

const SeatingChart = (props) => {
  console.log(props);
  return(
    <div>
      {Object.entries(props.seats).map(s=>
        <Seat key={s[0]} coords={s[0]} student={s[1]} />
      )}
    </div>
  )
}

export default SeatingChart;