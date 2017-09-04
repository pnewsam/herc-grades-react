import React, { Component } from "react";

class SeatingChart extends Component {
  constructor(props){
    super(props);
    this.state={
      students: [
        {
          id: 1,
          name: 'Joe Shmoe'
        },
        {
          id: 2,
          name: 'Diane Lane'
        },
        {
          id: 3,
          name: 'Jane Doe'
        }
      ]
    }
  }

  render(){
    return(
      <form>
        {this.state.students.map(s=>(
          <input type="radio" />
        ))}
        <submit>
      </form>
    )
  }
}