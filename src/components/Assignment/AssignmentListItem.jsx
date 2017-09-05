import React from "react";

export const AssignmentListItem = (props) => {
  let description = props.description || "";
  return(
    <div>
      <h4 className="title is-4">{props.name}</h4>
      <h6 className="subtitle is-6">{description.replace(/<[^>]*>/g, '')}</h6>
    </div>
  )
}