import React, { Component } from "react";
import database from "../scripts/firebase";

class SeatingChartContainer extends Component {
  constructor(props){
    super(props);
    this.initSeats = this.initSeats.bind(this);
    this.state = {
      courseId: props.courseId,
      students: props.students,
      seats: {}
    };
  }

  componentDidMount(){
    let ref = database.ref().child("seatingCharts/" + this.state.courseId);
    if (!ref) {
      console.log('in if!');
      this.initSeats(ref);
    }
    ref.once("value").then(snap => {
      this.setState({ seats: snap.val() });
      console.log(this.state);
    });
  }

  initSeats(ref){
    let o = {};
    for (let i = 0; i < this.state.students.length; i++) {
      o[this.state.students[i].id] = i;
    }
    ref.set(o);
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

export default SeatingChartContainer;