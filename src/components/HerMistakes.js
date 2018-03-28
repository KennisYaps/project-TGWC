import React, { Component } from "react";
import { MistakesArray } from "../utils/MistakesSeedData";

class Mistakes extends Component {
  constructor() {
    super();
    this.state = {
      mistakes: MistakesArray
    };
  }
  render() {
    return (
      <div>
        <span>
          {this.state.mistakes.map((mistake, index) => {
            return (
              <div>
                <h2>{mistake.Title}</h2>
                <p>
                  status:&nbsp;{mistake.isCompeleted === true
                    ? "Completed"
                    : "In progress"}
                </p>
                <p>{mistake.text}</p>
              </div>
            );
          })}
        </span>
      </div>
    );
  }
}
export default Mistakes;
