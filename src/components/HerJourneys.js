import React, { Component } from "react";
class HerJourneys extends Component {
  constructor() {
    super();
    this.state = {
      journeys: journeysArray
    };
  }
  render() {
      const displayJourney = this.state.journeys.map()
   return (
      <div>
        <h1>Her Journey</h1>
        
      </div>
    );
  }
}
export default HerJourneys;
