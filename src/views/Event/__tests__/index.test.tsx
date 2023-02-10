import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import { store } from "../../../redux/store";

import Event from "..";

const mockedNavigate = jest.fn();
const mockedSetOptions = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: mockedSetOptions,
    }),
    useRoute: () => ({
      params: {
        id: 1,
      },
    }),
  };
});

describe("<Event />", () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it("renders correcly", () => {
    expect(
      renderer
        .create(
          <Provider store={store}>
            <Event {...props} />
          </Provider>
        )
        .toJSON()
    ).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Event {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
