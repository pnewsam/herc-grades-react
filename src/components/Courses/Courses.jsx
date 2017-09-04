import React, { Component } from "react";

class Courses extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount(){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = `https://canvas.instructure.com/api/v1/courses?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
    fetch(proxy + url)
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

export default Courses;