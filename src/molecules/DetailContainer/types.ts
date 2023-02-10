import { ImageSourcePropType } from "react-native";

export interface Props {
  title: string;
  subTitle: string;
  icon: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
}
