import { View } from "react-native";

import Circle from "../../atoms/Circle";
import Text from "../../atoms/TextKanit";

import { Container } from "./styles";

import { Props } from "./types";

const DetailContainer = ({ title, subTitle }: Props) => {
  return (
    <Container>
      <Circle size={36} color="#E3E8F9">
        <View style={{ width: 18, height: 18, backgroundColor: "#2559F2" }} />
      </Circle>
      <View>
        <Text>{title}</Text>
        <Text weight={300} color="#778EB9">
          {subTitle}
        </Text>
      </View>
    </Container>
  );
};

export default DetailContainer;
