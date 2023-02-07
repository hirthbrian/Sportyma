import { Pressable, Text } from "react-native";

import styles from "./styles";
import { Props } from "./types";

const Button = ({ label, onPress }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default Button;
