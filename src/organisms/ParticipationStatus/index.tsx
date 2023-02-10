
import SectionTitle from "../../atoms/SectionTitle";
import ParticipationPill from "../../molecules/ParticipationPill";

import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { approve, refuse } from "../../redux/participationSlice";

import { Props } from "./types";
import { Container, HorizontalSeparator } from "./styles";

const tickIcon = require("../../../assets/tick.png");
const crossIcon = require("../../../assets/cross.png");

const ParticipationStatus = ({ eventId }: Props) => {
  const participationStatus = useAppSelector(
    (state) => state.participation[eventId]
  );
  const dispatch = useAppDispatch();

  const onPresentPress = () => {
    if (participationStatus !== "PRESENT") {
      dispatch(approve(eventId));
    }
  };

  const onAbsentPress = () => {
    if (participationStatus !== "ABSENT") {
      dispatch(refuse(eventId));
    }
  };

  return (
    <>
      <SectionTitle title="Ma participation" />
      <Container>
        <ParticipationPill
          title="Présent"
          icon={tickIcon}
          activeColor="#29D48C"
          onPress={onPresentPress}
          isActive={participationStatus === "PRESENT"}
        />
        <HorizontalSeparator />
        <ParticipationPill
          title="Absent"
          icon={crossIcon}
          activeColor="#EF4948"
          onPress={onAbsentPress}
          isActive={participationStatus === "ABSENT"}
        />
      </Container>
    </>
  );
};

export default ParticipationStatus;
