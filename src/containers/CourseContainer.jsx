import React, { Component } from "react";
import ApiUtil from "../utils/apiUtil";
import StudentsContainer from "./StudentsContainer";
import { course } from "../utils/sampleData";

class CourseContainer extends Component {
  constructor(props){
    super(props);
    this.fetchCourse = this.fetchCourse.bind(this);
    this.state = {
      id: props.match.params.course_id,
      name: ""
    }
  }

  componentDidMount(){
    // this.fetchCourse();
  }

  fetchCourse() {
    const url = ApiUtil().buildRequestUri({
      resource: "courses",
      resourceId: this.state.id
    });
    console.log(url)
    fetch(url)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      this.setState({
        name: r.name,
      });
    });
  }



  render(){
    return(
      <div>
        <h1 className="title is-1">{this.state.name || "Course"}</h1>
        <StudentsContainer courseId={this.state.id}/>
      </div>
    )
  }
}

export default CourseContainer;