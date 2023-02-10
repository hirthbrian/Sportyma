import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { store } from "../../../redux/store";

import ParticipationStatus from "..";

describe("<ParticipationStatus />", () => {
  let props;

  beforeEach(() => {
    props = {
      eventId: 1,
    };
  });

  it("renders correcly", () => {
    expect(
      renderer
        .create(
          <Provider store={store}>
            <ParticipationStatus {...props} />
          </Provider>
        )
        .toJSON()
    ).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ParticipationStatus {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
