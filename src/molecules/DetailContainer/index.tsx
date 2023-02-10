import { View } from "react-native";

import { Circle, KanitText } from "../../atoms";

import { Container, Image } from "./styles";

import { Props } from "./types";

const DetailContainer = ({ title, subTitle, icon, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Circle size={36} color="#E3E8F9">
        <Image source={icon} color="#2559F2" />
      </Circle>
      <View>
        <KanitText>{title}</KanitText>
        <KanitText weight={300} color="#778EB9">
          {subTitle}
        </KanitText>
      </View>
    </Container>
  );
};

export default DetailContainer;
