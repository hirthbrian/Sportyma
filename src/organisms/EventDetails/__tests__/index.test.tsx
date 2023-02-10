import React from "react";
import renderer from "react-test-renderer";

import EventDetails from "..";

const startDate = "2023-02-16T20:35:00+00:00" as unknown as Date;
const endDate = "2023-02-16T20:35:00+00:00" as unknown as Date;

describe("<EventDetails />", () => {
  let props;

  beforeEach(() => {
    props = {
      title: "test",
      startDate,
      endDate,
      location: {
        place: "Stade de la Meinau",
        address: "12 rue de l’Extenwoerth",
        city: "67100 Strasbourg",
      },
    };
  });

  it("renders correcly", () => {
    expect(renderer.create(<EventDetails {...props} />).toJSON()).toBeTruthy();
  });
  it("match snapshot", () => {
    const tree = renderer.create(<EventDetails {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
