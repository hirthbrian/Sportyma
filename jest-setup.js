require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();

global.__reanimatedWorkletInit = () => {};
jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);
