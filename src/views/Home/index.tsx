import { useNavigation } from "@react-navigation/native";

import ParticicationPill from "../../molecules/ParticipationPill";
import Separator from "../../atoms/Separator";

import trainig1 from "../../../data/training_1.json";
import trainig2 from "../../../data/training_2.json";

import { Container } from "./styles";

const data = [trainig1, trainig2];

const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({ item: { title, id } }) => (
    <ParticicationPill
      title={title}
      onPress={() => navigation.navigate("Event", { id })}
    />
  );

  return (
    <Container
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export default Home;
