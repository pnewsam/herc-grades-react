import React from "react";
import { AssignmentListItem } from "./AssignmentListItem";

export const AssignmentList = (props) => {
  return(
    <div>
    {props.assignments.map(a=>(
      <AssignmentListItem name={a.name} description={a.description}/>
    ))}
    </div>
  )
};
