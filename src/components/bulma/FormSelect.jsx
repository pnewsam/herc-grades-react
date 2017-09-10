import React from "react";

const FormSelect = (props) => {
  return(
    <div className="control">
      <div className="select">
        <select>
          {props.children}
        </select>
      </div>
    </div>
  )
}

export default FormSelect;
