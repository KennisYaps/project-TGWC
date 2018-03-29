// import React, { Component } from "react";
// import { shallow } from "enzyme";
// import fetchMock from "fetch-mock";
// import HerMistakes from "./HerMistakes";

// describe("<HerMistake/>", () => {
//   test("should load data into the timelines array in componentDidMount", async () => {
//     const MOCK_RESPONSE_KEY = "some field";
//     const MOCK_RESPONSE_VALUE = "some value";
//     fetchMock.get("http://localhost:3000/mistakes", {
//       status: 200,
//       body: [{ MOCK_RESPONSE_KEY: MOCK_RESPONSE_VALUE }]
//     });
//     const wrapper = shallow(<HerMistakes title="" date="" text=""/>);
//     await wrapper.instance().componentDidMount();
//     console.log(wrapper.state()[0])
//     // expect(wrapper.state().mistakes[0].MOCK_RESPONSE_KEY).toEqual(
//     //   MOCK_RESPONSE_VALUE
//     // );
//   });
// });
