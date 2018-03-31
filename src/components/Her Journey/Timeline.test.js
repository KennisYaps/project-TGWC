import React, { Component } from "react";
import { shallow } from "enzyme";
import Timeline from "./Timeline";
import Event from "./Event";
describe("<Timeline/>", () => {
  test("should render a Timeline data properly ", () => {
    const sampleData = {
      TimelineTitle: "language",
      date: "1-Aug",
      events: [{ date: "1-June-2018", title: "title", text: "testing" }]
    };
    const wrapper = shallow(<Timeline timelineDatas={sampleData} />);
    console.log(wrapper.debug());
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("#TimelineDataEvents")).toHaveLength(1);
    expect(wrapper.find("Event")).toHaveLength(1);
  });
});
