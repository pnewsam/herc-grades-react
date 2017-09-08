import React, { Component } from "react";
import Seat from "./Seat";

class SeatingChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      seats: props.seats,
      students: props.students
    };
  }
  
  render(){
    return(
      <div>
        {Object.entries(this.state.seats).map(seat=>{
          let student = this.state.students[seat[1]]
          return(
            <Seat key={seat[0]} coords={seat[0]} student={student} />
          )
        })}
      </div>
    )
  }
}

export default SeatingChart;