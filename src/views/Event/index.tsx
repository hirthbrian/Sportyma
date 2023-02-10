import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  PageHeader,
  ParticipationStatus,
  EventDetails,
  Information,
} from "../../organisms";
import { Separator } from "../../atoms";

import { loadEventData } from "../../utils";

import { Container } from "./styles";

const Event = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = loadEventData();
  const event = data[route.params.id - 1];

  const { id, title, startdate, enddate, location, information } = event;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <Container>
      <PageHeader date={startdate} />
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
