import { ImageSourcePropType, GestureResponderEvent } from "react-native";

export interface Props {
  title: string;
  isActive?: boolean;
  activeColor?: string;
  icon?: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}
