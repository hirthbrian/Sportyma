import { Props } from "./types";
import { PressableContainer, Container, Text, Image } from "./styles";

const ParticipationPill = ({
  title,
  isActive,
  activeColor,
  icon,
  onPress,
}: Props) => {
  return (
    <PressableContainer onPress={onPress}>
      <Container isActive={isActive} color={activeColor}>
        <Image source={icon} isActive={isActive} color={activeColor} />
        <Text size={13} weight={500} isActive={isActive}>
          {title.toUpperCase()}
        </Text>
      </Container>
    </PressableContainer>
  );
};

export default ParticipationPill;
