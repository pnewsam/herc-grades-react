import React, { Component } from "react";
import database from "../scripts/firebase";
import SeatingChart from "../components/SeatingChart/SeatingChart";

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
    let ref = database.ref("seatingCharts/" + this.state.courseId + "/seats");
    ref.once("value").then(snap => {
      if (snap.val() === null) {
        this.initSeats(ref);
      }
      // console.log('did mount!')
      this.setState({ seats: snap.val() });
    });
  }

  initSeats(ref){
    const n = this.state.students.length;
    let nRows, nCols;
    if (n >= 16 && n <= 20) {
      nRows = 4; nCols = 5;
    } else if (n >= 21 && n <= 24) {
      nRows = 4; nCols = 6;
    } else if (n >= 25 && n <= 30) {
      nRows = 5; nCols = 6;
    } else if (n >= 31 && n <= 35) {
      nRows = 5; nCols = 7;
    } else if (n >= 36 && n <= 42) {
      nRows = 6; nCols = 7;
    } else if (n >= 43 && n <= 48) {
      nRows = 6; nCols = 8;
    }
    let o = {};
    for (let i = 0; i < this.state.students.length; i++) {
      let coords = '';
      let r = Math.floor(i / nCols).toString();
      let c = (i % nCols).toString();
      coords = coords + r + c;
      o[coords] = this.state.students[i].id;
    }
    ref.set(o);
  }

  render(){
    console.log(this.state.seats);
    return(
      <div>
        <SeatingChart seats={this.state.seats} students={this.state.students}/>
      </div>
    )
  }
}

export default SeatingChartContainer;