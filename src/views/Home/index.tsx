import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import trainig1 from "../../../data/training_1.json";
import trainig2 from "../../../data/training_2.json";
import Item from "../../organisms/Item";

import styles from "./styles";

const data = [trainig1, trainig2];

const Home = () => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate("Event");

  const renderItems = (r) => (
    <Item key={r.id} id={r.id} title={r.title} onPress={onPress} />
  );

  return <View style={styles.container}>{data.map(renderItems)}</View>;
};

export default Home;
