import React, { Component } from "react";
import SeatingChart from "./SeatingChart";
import CardColumn from "../bulma/CardColumn";
import FormField from "../bulma/FormField";
import StudentList from "../StudentList/StudentList";

class SeatingChartForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateSeatWidth = this.calculateSeatWidth.bind(this);
    this.state = {
      seats: {},
      students: props.students,
      numRows: 0,
      numCols: 0,
      width: 0,
      seatWidth: 0
    };
  }

  calculateSeatWidth(containerWidth){
    let computed = ((containerWidth * .75) / this.state.numCols) - (this.state.numCols * 10);
    let max = 150;
    let min = 40;
    if (computed > max) {
      return( max );
    } else {
      return Math.max(computed, min);
    }
  }

  componentDidMount(){
    this.setState({
      width: this.container.offsetWidth
    })
    window.addEventListener('resize', e => {
      this.setState({
        width: this.container.offsetWidth
      });
    });
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let s = {}
    for (let i = 0; i < this.state.numRows; i++) {
      s[i] = {}
      for (let j = 0; j < this.state.numCols; j++) {
        s[i][j] = 0;
      }
    }
    this.setState({
      seats: s,
      seatWidth: this.calculateSeatWidth(this.state.width)
    });
  }

  render(){
    console.log(this.state)
    return(
      <div className="columns" ref={container => { this.container = container }}>
        <CardColumn is={9}>
          <SeatingChart seats={this.state.seats} seatWidth={this.state.seatWidth}/>
        </CardColumn>
        <CardColumn is={3}>
          <form action="" onSubmit={this.handleSubmit}>
            <FormField label="Number of Rows">
              <input
                id="numRows"
                className="input"
                type="number"
                value={this.state.numRows}
                onChange={this.handleChange}
              />
            </FormField>
            <FormField label="Number of Columns">
              <input
                id="numCols"
                className="input"
                type="number"
                value={this.state.numCols}
                onChange={this.handleChange}
              />
            </FormField>
            <FormField>
              <button
                className="button is-primary"
                type="submit"
              >
                Update
              </button>
            </FormField>
          </form>
          <StudentList students={this.state.students}/>
        </CardColumn>
      </div>
    )
  }
}

export default SeatingChartForm;