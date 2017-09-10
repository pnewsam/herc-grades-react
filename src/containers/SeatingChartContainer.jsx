import React, { Component } from "react";
import database from "../scripts/firebase";
import SeatingChart from "../components/SeatingChart/SeatingChart";
import SeatingChartForm from "../components/SeatingChart/SeatingChartForm";

class SeatingChartContainer extends Component {
  constructor(props){
    super(props);
    this.seatStudents = this.seatStudents.bind(this);
    this.state = {
      courseId: props.courseId,
      students: props.students,
      formActive: false,
      seatAssignments: {},
      seats: {},
      containerWidth: 0
    };
  }

  componentDidMount(){
    let ref = database.ref("seatingCharts/" + this.state.courseId + "/seatAssignments");
    ref.once("value").then(snap => {
      if (snap.val() !== null) {
        this.setState({ seatAssignments: snap.val() });
      } else {
        this.setState({ formActive: true });
      }
    });
    this.seatStudents();
    this.setState({
      containerWidth: this.container.offsetWidth
    })
    window.addEventListener('resize', e => {
      this.setState({
        containerWidth: this.container.offsetWidth
      });
    });
  }

  seatStudents(){
    let sA = this.state.seatAssignments;
    let seats = {};
    for (let prop in sA) {
      let s = this.state.students.filter(student => student.id === sA[prop]);
      seats[prop] = s;
    }
    this.setState({
      seats: seats
    });
  }

  // initSeats(ref){
  //   const n = this.state.students.length;
  //   let nRows, nCols;
  //   if (n >= 16 && n <= 20) {
  //     nRows = 4; nCols = 5;
  //   } else if (n >= 21 && n <= 24) {
  //     nRows = 4; nCols = 6;
  //   } else if (n >= 25 && n <= 30) {
  //     nRows = 5; nCols = 6;
  //   } else if (n >= 31 && n <= 35) {
  //     nRows = 5; nCols = 7;
  //   } else if (n >= 36 && n <= 42) {
  //     nRows = 6; nCols = 7;
  //   } else if (n >= 43 && n <= 48) {
  //     nRows = 6; nCols = 8;
  //   }
  //   let o = {};
  //   for (let i = 0; i < this.state.students.length; i++) {
  //     let coords = '';
  //     let r = Math.floor(i / nCols).toString();
  //     let c = (i % nCols).toString();
  //     coords = coords + r + c;
  //     o[coords] = this.state.students[i].id;
  //   }
  //   ref.set(o);
  // }

  render(){
    if (this.state.formActive) {
      return(
        <div ref={container => { this.container = container }}>
          <SeatingChartForm students={this.state.students} />
        </div>
      )
    } else {
      return(
        <div ref={container => { this.container = container }}>
          <SeatingChart seats={this.state.seats} containerWidth={this.state.containerWidth}/>
        </div>
      )
    }
  }
}

export default SeatingChartContainer;