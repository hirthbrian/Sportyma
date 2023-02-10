import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../redux/hook";

import { ParticipationButton } from "../../molecules";
import { Separator } from "../../atoms";
import { loadEventData } from "../../utils";

import { Container } from "./styles";

const Home = () => {
  const participationStatus = useAppSelector((state) => state.participation);
  const navigation = useNavigation();
  const data = loadEventData();

  const getActiveColor = (status: string) => {
    if (status === "PRESENT") {
      return "#29D48C";
    } else if (status === "ABSENT") {
      return "#EF4948";
    }
  };

  const renderItem = ({ item: { title, id } }) => {
    const status = participationStatus[id];
    return (
      <ParticipationButton
        title={title}
        activeColor={getActiveColor(status)}
        isActive={status === "PRESENT" || status === "ABSENT"}
        onPress={() => navigation.navigate("Event", { id })}
      />
    );
  };

  return (
    <Container
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export default Home;
