import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Props } from "./types";
import { PressableContainer, Container, Text, Image } from "./styles";

const ParticipationButton = ({
  title,
  isActive,
  activeColor,
  icon,
  onPress,
}: Props) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 200 }) }],
  }));

  const onPressIn = () => (scale.value = 0.95);
  const onPressOut = () => (scale.value = 1);

  return (
    <PressableContainer
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <Animated.View style={animatedStyle}>
        <Container isActive={isActive} color={activeColor}>
          <Image source={icon} isActive={isActive} color={activeColor} />
          <Text size={13} weight={500} isActive={isActive}>
            {title.toUpperCase()}
          </Text>
        </Container>
      </Animated.View>
    </PressableContainer>
  );
};

export default ParticipationButton;
