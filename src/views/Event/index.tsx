import { View } from "react-native";

import PageHeader from "../../organisms/PageHeader";
import EventDetails from "../../organisms/EventDetails";
import ParticipationStatus from "../../organisms/ParticipationStatus";
import Information from "../../organisms/Information";

import Separator from "../../atoms/Separator";
import SectionTitle from "../../atoms/SectionTitle";

const data = require("../../../data/training_1.json");

const EVENT_ID = 0;

const Event = () => {
  const { title, startdate, information } = data;
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <PageHeader title={title} date={startdate} />
      <Separator />
      <SectionTitle title="Ma participation" />
      <ParticipationStatus />
      <Separator />
      <EventDetails />
      <Separator />
      <Information info={information} />
    </View>
  );
};

export default Event;
