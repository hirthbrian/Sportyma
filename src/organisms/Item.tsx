import { Alert, GestureResponderEvent, View } from "react-native";
import ButtonPrimary from "../atoms/Button";

type ItemProps = {
  id: number;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function Item(item: ItemProps) {
  return (
    <View key={item.id}>
      <ButtonPrimary label={item.title} onPress={item.onPress} />
    </View>
  );
}
