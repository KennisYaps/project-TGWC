import React, { Component } from "react";
import { shallow } from "enzyme";
import SkillsChart from "./SkillsChart";
import HerSkills from "./HerSkills";

describe("Her Skills", () => {
  it("should have 1 <h1> tag", () => {
    const wrapper = shallow(<HerSkills />);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
  it("should have 1 <SkillsChart/> component", () => {
    const wrapper = shallow(<HerSkills />);
    expect(wrapper.find(SkillsChart)).toHaveLength(1);
  });
});
