import { View } from "react-native";

import SectionTitle from "../../atoms/SectionTitle";
import ParticipationPill from "../../molecules/ParticipationPill";

import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { approve, refuse, cancel } from "../../redux/participationSlice";

import { Props } from "./types";

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
      <View style={{ paddingTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
        <ParticipationPill
          title="Présent"
          icon={tickIcon}
          activeColor="#29D48C"
          onPress={onPresentPress}
          isActive={participationStatus === "PRESENT"}
        />
        <ParticipationPill
          title="Absent"
          icon={crossIcon}
          activeColor="#EF4948"
          onPress={onAbsentPress}
          isActive={participationStatus === "ABSENT"}
        />
      </View>
      {/* <Button
        title="Present"
        onPress={onPresentPress}
        color={participationStatus === "PRESENT" ? "#29D48C" : "blue"}
      />
      <Button
        title="Absent"
        onPress={onAbsentPress}
        color={participationStatus === "ABSENT" ? "#EF4948" : "blue"}
      /> */}
    </>
  );
};

export default ParticipationStatus;
