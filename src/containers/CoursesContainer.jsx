import React, { Component } from "react";
import apiUtil from "../utils/apiUtil";

class CoursesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount(){
    const url = apiUtil().buildUrl();
    console.log(url);
    fetch(url)
    .then(r => r.json())
    .then(r => {
      this.setState({ courses: r })
      console.log(this.state)
    });
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        <ul>
        {this.state.courses.map(c=>
          <li>{c.name}</li>
        )}
        </ul>
      </div>
    )
  }
}

export default CoursesContainer;