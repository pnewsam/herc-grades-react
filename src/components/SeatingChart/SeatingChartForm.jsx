import React, { Component } from "react";
import SeatingChart from "./SeatingChart";

class SeatingChartForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      students: props.students,
      numRows: 0,
      numCols: 0,
      
    };
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }



  render(){
    return(
      <div className="columns">
        <div className="column is-8 card">
          <div className="card-content">
            <SeatingChart numRows={this.state.numRows} numCols={this.state.numCols} />
          </div>
        </div>
        <div className="column is-4 card">
          <div className="card-content">
            <h1>Edit Your Seating Chart</h1>
            <form action="">
              <div className="field">
                <label className="label" htmlFor="">Number of Rows</label>
                <div className="control">
                  <input
                    id="numRows"
                    className="input"
                    type="number"
                    value={this.state.numRows}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="">Number of Columns</label>
                <div className="control">
                  <input
                    id="numCols"
                    className="input"
                    type="number"
                    value={this.state.numCols}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SeatingChartForm;