import React, { Component } from "react";
import { shallow } from "enzyme";
import Event from "./Event";

describe("<Event/>", () => {
  test("should render Event data properly", () => {
    const sampleData = {
      events: [{ date: "1-June-2018", title: "title", text: "testing" }]
    };
    const wrapper = shallow(<Event eventdata={sampleData} />);
    expect(wrapper.find("#HerStory-Event")).toHaveLength(1);
    expect(wrapper.find("h4")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(2);
  });
});
