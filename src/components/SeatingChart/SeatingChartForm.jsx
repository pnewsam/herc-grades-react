import React, { Component } from "react";
import SeatingChart from "./SeatingChart";
import CardColumn from "../bulma/CardColumn";
import FormField from "../bulma/FormField";

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
    let computed = (containerWidth / this.state.numCols) - (this.state.numCols * 10);
    let max = 150;
    let min = 50;
    if (computed > max) {
      return(
        Math.min(computed, max)
      )
    } else {
      return min;
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
      <div ref={container => { this.container = container }}>
        <div className="card">
          <form className="card-content" action="" onSubmit={this.handleSubmit}>
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
                Submit
              </button>
            </FormField>
          </form>
        </div>
        <div className="card">
          <div className="card-content">
            <SeatingChart seats={this.state.seats} seatWidth={this.state.seatWidth}/>
          </div>
        </div> 
      </div>
    )
  }
}

export default SeatingChartForm;