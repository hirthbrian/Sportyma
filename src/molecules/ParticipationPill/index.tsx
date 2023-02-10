import { Container, Text } from "./styles";

import { Props } from "./types";

const ParticipationPill = ({
  title,
  isActive,
  activeColor,
  icon,
  onPress,
}: Props) => {
  return (
    <Container isActive={isActive} color={activeColor} onPress={onPress}>
      <Text isActive={isActive}>{title.toUpperCase()}</Text>
    </Container>
  );
};

export default ParticipationPill;
