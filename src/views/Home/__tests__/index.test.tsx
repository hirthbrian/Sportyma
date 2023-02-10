import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { store } from "../../../redux/store";

import Home from "..";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("<Home />", () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it("renders correcly", () => {
    expect(
      renderer
        .create(
          <Provider store={store}>
            <Home {...props} />
          </Provider>
        )
        .toJSON()
    ).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
