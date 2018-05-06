import React from "react";
import Home from "../Home/Home";
import HerWorks from "../HerWorks/HerWorks";
import HerStory from "../HerStory/HerStory";
import HerSkills from "../HerSkills/HerSkills";
import AboutHer from "../AboutHer/AboutHer";
import HerMistakes from "../HerMistakes/HerMistakes";

const Layout = () => (
  <div id="Layout">
    <Home />
    <AboutHer />
    <HerSkills />
    {/* <HerStory /> */}
    <HerMistakes />
    <HerWorks />
  </div>
);

export default Layout;
