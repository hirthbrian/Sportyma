import { SectionTitle } from "../../atoms";
import { ParticipationButton } from "../../molecules";

import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { approve, refuse } from "../../redux/participationSlice";

import { Props } from "./types";
import { Container, HorizontalSeparator } from "./styles";
import { ParticipationEnum, Colors } from "../../types";

const tickIcon = require("../../../assets/icons/tick.png");
const crossIcon = require("../../../assets/icons/cross.png");

const ParticipationStatus = ({ eventId }: Props) => {
  const participationStatus = useAppSelector(
    (state) => state.participation[eventId]
  );
  const dispatch = useAppDispatch();

  const onPresentPress = () => {
    if (participationStatus !== ParticipationEnum.Present) {
      dispatch(approve(eventId));
    }
  };

  const onAbsentPress = () => {
    if (participationStatus !== ParticipationEnum.Absent) {
      dispatch(refuse(eventId));
    }
  };

  return (
    <>
      <SectionTitle title="Ma participation" />
      <Container>
        <ParticipationButton
          title="Présent"
          icon={tickIcon}
          activeColor={Colors.GreenSecondary}
          onPress={onPresentPress}
          isActive={participationStatus === ParticipationEnum.Present}
        />
        <HorizontalSeparator />
        <ParticipationButton
          title="Absent"
          icon={crossIcon}
          activeColor={Colors.RedAlert}
          onPress={onAbsentPress}
          isActive={participationStatus === ParticipationEnum.Absent}
        />
      </Container>
    </>
  );
};

export default ParticipationStatus;
