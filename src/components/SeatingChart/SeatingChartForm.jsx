import React, { Component } from "react";
import SeatingChart from "./SeatingChart";
import CardColumn from "../bulma/CardColumn";
import FormField from "../bulma/FormField";

class SeatingChartForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      students: props.students,
      numRows: 0,
      numCols: 0,
      seats: {}
    };
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
      for (let j = 0; j < this.state.numCols; j++) {
        let coords = i.toString() + j.toString();
        s[coords] = 0;
      }
    }
    this.setState({
      seats: s
    });
  }

  render(){
    console.log(this.state);
    return(
      <div className="columns">
      <CardColumn is={8}>
            <SeatingChart seats={this.state.seats} />
      </CardColumn>
      <CardColumn is={4}>
        <h1>Edit Your Seating Chart</h1>
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
                Submit
              </button>
            </FormField>
          </form>
        </CardColumn>
      </div>
    )
  }
}

export default SeatingChartForm;