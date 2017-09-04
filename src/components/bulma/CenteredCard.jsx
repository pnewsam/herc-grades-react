import React, { Component } from "react";

class CenteredCard extends Component {
  render(){
    return (
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="card">
            <div className="card-content">
              {this.props.children}
            </div>
          </div> 
        </div>
      </div>
    );
  }
};

export default CenteredCard;