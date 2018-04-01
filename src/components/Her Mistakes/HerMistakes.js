import React, { Component } from "react";
import Mistake from "./Mistake";
import "../../CSS/HerMistakes.css";
import '../../index.css';

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
    return (
      <div id="HerMistakes">
        <h1 id="HerMistakes-Title">HER MISTAKES</h1>
        <section id="Mistakes-container">{displayMistakes}</section>
      </div>
    );
  }
  async componentDidMount() {
    await fetch("http://localhost:3000/mistakes")
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
