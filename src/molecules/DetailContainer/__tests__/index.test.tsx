import React from "react";
import renderer from "react-test-renderer";

import DetailContainer from "..";

const icon = require("../../../../assets/icons/calendar.png");

describe("<DetailContainer />", () => {
  let props;

  beforeEach(() => {
    props = {
      title: "test",
      subTitle: "sub test",
      icon,
    };
  });

  it("renders correcly", () => {
    expect(
      renderer.create(<DetailContainer {...props} />).toJSON()
    ).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer.create(<DetailContainer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
