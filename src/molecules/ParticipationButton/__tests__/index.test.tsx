import React from "react";
import renderer from "react-test-renderer";

import ParticipationButton from "..";

describe("<ParticipationButton />", () => {
  let props;

  beforeEach(() => {
    props = {
      title: "test",
      isActive: false,
      activeColor: "red",
    };
  });

  it("renders correcly", () => {
    expect(
      renderer.create(<ParticipationButton {...props} />).toJSON()
    ).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer.create(<ParticipationButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("match snapshot with active", () => {
    props = {
      ...props,
      isActive: true,
    };
    const tree = renderer.create(<ParticipationButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("match snapshot with color", () => {
    props = {
      ...props,
      activeColor: "blue",
    };
    const tree = renderer.create(<ParticipationButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
