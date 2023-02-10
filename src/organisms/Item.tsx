import { Alert, GestureResponderEvent, View } from "react-native";
import Button from "../atoms/Button";

type ItemProps = {
  id: number;
  title: string;
  onPress: (id: number) => void;
};

export default function Item(item: ItemProps) {
  const onPress = () => item.onPress(item.id);

  return (
    <View key={item.id}>
      <Button label={item.title} onPress={onPress} />
    </View>
  );
}
