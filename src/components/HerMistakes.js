import React, { Component } from "react";
import Mistake from './Mistake';
class Mistakes extends Component {
  constructor() {
    super();
    this.state = {
      mistakes: []
    };
  }
  render() {
    const displayMistakes = this.state.mistakes.map((mistake, index) => {
      return <Mistake mistakeData={mistake} key={index} />;
    });
    return <div>{displayMistakes}</div>;
  }
  componentDidMount() {
    fetch("http://localhost:3000/mistakes")
      .then(data => {
        return data.json();
      })
      .then(data =>
        this.setState({
          mistakes: data
        })
      );
  }
}
export default Mistakes;
