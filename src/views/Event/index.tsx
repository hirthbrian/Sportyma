import PageHeader from "../../organisms/PageHeader";
import EventDetails from "../../organisms/EventDetails";
import ParticipationStatus from "../../organisms/ParticipationStatus";
import Information from "../../organisms/Information";

import Separator from "../../atoms/Separator";

import { Container } from "./styles";

const data = require("../../../data/training_2.json");

const Event = () => {
  const { title, startdate, enddate, information, location } = data;

  return (
    <Container>
      <PageHeader title={title} date={startdate} />
      <Separator />
      <ParticipationStatus />
      <Separator />
      <EventDetails
        title={title}
        startDate={startdate}
        endDate={enddate}
        location={location}
      />
      <Separator />
      <Information info={information} />
    </Container>
  );
};

export default Event;
