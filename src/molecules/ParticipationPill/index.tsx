import { Pressable } from "react-native";

import { Props } from "./types";
import { Container, Text, Image } from "./styles";

const ParticipationPill = ({
  title,
  isActive,
  activeColor,
  icon,
  onPress,
}: Props) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={onPress}>
      <Container isActive={isActive} color={activeColor}>
        <Image source={icon} isActive={isActive} color={activeColor} />
        <Text size={13} weight={500} isActive={isActive}>
          {title.toUpperCase()}
        </Text>
      </Container>
    </Pressable>
  );
};

export default ParticipationPill;
