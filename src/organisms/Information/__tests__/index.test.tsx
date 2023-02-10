import React from "react";
import renderer from "react-test-renderer";

import Information from "..";

describe("<Information />", () => {
  let props;

  beforeEach(() => {
    props = {
      info: "bla bla bla",
    };
  });

  it("renders correcly", () => {
    expect(renderer.create(<Information {...props} />).toJSON()).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer.create(<Information {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
