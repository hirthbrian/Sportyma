import { GestureResponderEvent } from "react-native";

export type Props = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};
