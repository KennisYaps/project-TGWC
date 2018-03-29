import React, { Component } from "react";
import Mistake from "./Mistake";
import { Row } from "antd";

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
      <div style={{ padding: "30px" }}>
        <Row gutter={16} type="flex" justify="center" around="xs">
          {displayMistakes}
        </Row>
      </div>
    );
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
