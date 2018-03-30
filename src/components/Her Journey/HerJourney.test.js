import React, { Component } from "react";
import { shallow } from "enzyme";
import HerJourney from "./HerJourney";
import fetchMock from "fetch-mock";
import Timeline from "./Timeline";

describe(`<HerJourney/>`, () => {
  test(`should load data into the timelines array in componentDidMount`, async () => {
    const MOCK_RESPONSE_KEY = "some field";
    const MOCK_RESPONSE_VALUE = "some value";
    fetchMock.get("http://localhost:3000/timelines", {
      status: 200,
      body: [{ MOCK_RESPONSE_KEY: MOCK_RESPONSE_VALUE }]
    });
    const wrapper = shallow(<HerJourney />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().timelines[0].MOCK_RESPONSE_KEY).toEqual(
      MOCK_RESPONSE_VALUE
    );
  });
  test("should have 1 <h1>", () => {
    const wrapper = shallow(<HerJourney />);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
  test("should have render <Timeline/> component", () => {
    const wrapper = shallow(<HerJourney />);
    // console.log(wrapper.debug())
    expect(wrapper.find("#timelines")).toHaveLength(1)
});
})
