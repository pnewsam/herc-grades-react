import React from "react";
import FormField from "../bulma/FormField";
import FormSelect from "../bulma/FormSelect";
import { formatName } from "../../utils/nameUtil";

const SeatingPhase = (props) => {
  return(
    <div>
      <h3 className="title is-3">Now, seat your students.</h3>
      <form action="">
        <table className="table is-narrow">
          <tbody>
          {Object.entries(props.students).map(student => {
            return(
              <tr>
                <td>
                  <label htmlFor="" className="label">{formatName(student[1].name)}</label>
                </td>
                <td>
                  <FormSelect>
                    {Object.entries(props.seats).map(row => {
                      return(
                      Object.entries(row).map(seat => {
                        let coords = row[0].toString() + seat[0].toString()
                        return(
                          <option value="">{coords}</option>
                          )
                      })
                      )
                    })}
                  </FormSelect>
                </td>
              </tr>
            )
          })}
            <tr>
              <td className="control" colSpan={2}>
                <button className="button is-primary" type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <button className="button is-warning" onClick={props.handleReturn}>
        Back
      </button>
    </div>
  )
}

export default SeatingPhase;