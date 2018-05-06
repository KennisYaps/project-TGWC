import React from "react";
import "../../index.css";
import "./HerWorks.css";
const HerWorks = () => (
  <div id="HerWorks">
    <h1>HER WORKS</h1>
    <div className="Project-container">
      <p className="Work-Image-Fetch-React-Lab" />
      <div className="Work-Description">
        <h2 className="Work-Title">Fetch React Lab</h2>
        <p className="Work-Link">
          <i className="material-icons">code</i>
          <a
            className="anchor-text"
            href="https://github.com/yappps/fetch-react-lab"
          >
            Click To View The Source Code
          </a>
        </p>
      </div>
    </div>
    <div className="Project-container">
      <p className="Work-Image-myFeedback" />
      <div className="Work-Description">
        <h2 className="Work-Title">myFeedback App</h2>
        <p className="Work-Link">
          <i className="material-icons">code</i>
          <a
            className="anchor-text"
            href="http://my-feedback-team-b-staging.herokuapp.com/ 
            "
          >
            Click To View The Source Code
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default HerWorks;
