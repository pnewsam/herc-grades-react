import React from "react";
import FormField from "../bulma/FormField";

const SeatingChartConfigurationForm = (props) => {
    return(
      <form action="" onSubmit={props.handleSubmit}>
        <FormField label="Number of Rows">
          <input
            id="numRows"
            className="input"
            type="number"
            value={props.numRows}
            onChange={props.handleChange}
          />
        </FormField>
        <FormField label="Number of Columns">
          <input
            id="numCols"
            className="input"
            type="number"
            value={props.numCols}
            onChange={props.handleChange}
          />
        </FormField>
        <FormField>
          <button
            className="button is-primary"
            type="submit"
          >
            Update
          </button>
        </FormField>
      </form>
    )
}

export default SeatingChartConfigurationForm;