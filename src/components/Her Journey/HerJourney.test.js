import React, { Component } from "react";
import { shallow } from "enzyme";
import HerJourney from "./HerJourney";
import fetchMock from "fetch-mock";

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
});
