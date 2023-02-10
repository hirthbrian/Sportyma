import { Container, Text, Image } from "./styles";

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
      <Image source={icon} isActive={isActive} color={activeColor} />
      <Text size={13} weight={500} isActive={isActive}>
        {title.toUpperCase()}
      </Text>
    </Container>
  );
};

export default ParticipationPill;
