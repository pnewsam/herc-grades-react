import React, { Component } from "react";
import ApiUtil from "../utils/apiUtil";
import { students } from "../utils/sampleData";
import capitalize from "voca/capitalize";

class StudentsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      courseId: props.courseId,
      students: students
    };
  }

  componentDidMount(){
    // fetchStudents();
  }

  fetchStudents() {
    const url = ApiUtil().buildRequestUri({
      resource: "courses",
      resourceId: this.state.id,
      nestedResource: "users",
      queries: ["enrollment_type[student]=student"]
    })
    fetch(url)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      // this.setState({
      //   students: r.stud
      // });
    });
  }

  formatName(name){
    return name.split(" ").map( w => capitalize(w.toLowerCase()) ).join(" ");
  }


  render(){
    return(
      <div>
        <h1 className="title is-1">Students</h1>
        <ul>
        {this.state.students.map(s=>(
          <li>{this.formatName(s.name)}</li>
        )
        )}
        </ul>
      </div>
    )
  }
}

export default StudentsContainer;