import React from "react";
import renderer from "react-test-renderer";

import DayPill from "..";

const date = "2023-02-16T20:35:00+00:00" as unknown as Date;

describe("<DayPill />", () => {
  let props;

  beforeEach(() => {
    props = {
      date,
    };
  });

  it("renders correcly", () => {
    expect(renderer.create(<DayPill {...props} />).toJSON()).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer.create(<DayPill {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
