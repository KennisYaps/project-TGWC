import React from "react";
import { Route, Link } from "react-router-dom";
import Home from './Home';
import AboutHer from './AboutHer';
import HerJourney from './HerJourney';
import HerMistakes from './HerMistakes';
import HerProjects from './HerProjects';
import HerResume from './HerResume';
const MyRouter = () => (
  <div>
    <p>you are in MyRouter.js file</p>
    <Link to="/">Home</Link>&nbsp;&nbsp;
    <Link to="/about-her">About Her</Link>&nbsp;&nbsp;
    <Link to="/her-journey">Her Journey</Link>&nbsp;&nbsp;
    <Link to="/her-mistakes">Her Mistakes</Link>&nbsp;&nbsp;
    <Link to="/her-projects">Her Projects</Link>&nbsp;&nbsp;
    <Link to="/her-resume">Her Resume</Link>&nbsp;&nbsp;
    <Route exact path="/" component={Home}/>
    <Route exact path="/about-her" component={AboutHer}/>
    <Route exact path="/her-journey" component={HerJourney}/>
    <Route exact path="/her-mistakes" component={HerMistakes}/>
    <Route exact path="/her-projects" component={HerProjects}/>
    <Route exact path="/her-resume" component={HerResume}/>
  </div>
);

export default MyRouter;
