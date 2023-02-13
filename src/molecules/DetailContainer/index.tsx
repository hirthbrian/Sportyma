import { View } from "react-native";

import { Circle, KanitText } from "../../atoms";

import { Container, Image } from "./styles";

import { Props } from "./types";
import { Colors } from "../../types";

const DetailContainer = ({ title, subTitle, icon, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Circle size={36} color={Colors.Blue03}>
        <Image source={icon} color={Colors.BluePrimary} />
      </Circle>
      <View>
        <KanitText>{title}</KanitText>
        <KanitText weight={300} color={Colors.Grey01}>
          {subTitle}
        </KanitText>
      </View>
    </Container>
  );
};

export default DetailContainer;
