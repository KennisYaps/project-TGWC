import React, { Component } from "react";

class Journey extends Component {
  render() {
    console.log(this.props.individualJourney);
    return (
      <div>
        <h2>{this.props.individualJourney.event}</h2>
        <p>{this.props.individualJourney.details[0]}</p>
      </div>
    );
  }
}

export default Journey;
