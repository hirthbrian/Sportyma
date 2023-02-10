import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import PageHeader from "../../organisms/PageHeader";
import EventDetails from "../../organisms/EventDetails";
import ParticipationStatus from "../../organisms/ParticipationStatus";
import Information from "../../organisms/Information";

import Separator from "../../atoms/Separator";

import { Container } from "./styles";

const data = [
  require("../../../data/training_1.json"),
  require("../../../data/training_2.json"),
];

const Event = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const event = data[route.params.id - 1];

  const { id, title, startdate, enddate, location, information } = event;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <Container>
      <PageHeader title={title} date={startdate} />
      <Separator />
      <ParticipationStatus eventId={id} />
      <Separator />
      <EventDetails
        title={title}
        startDate={startdate}
        endDate={enddate}
        location={location}
      />
      {information && (
        <>
          <Separator />
          <Information info={information} />
        </>
      )}
    </Container>
  );
};

export default Event;
