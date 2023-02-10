import { Button } from "react-native";

import SectionTitle from "../../atoms/SectionTitle";

import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { approve, refuse, cancel } from "../../redux/participationSlice";

import { Props } from "./types";

const ParticipationStatus = ({ eventId }: Props) => {
  const participationStatus = useAppSelector(
    (state) => state.participation[eventId]
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <SectionTitle title="Ma participation" />

      <Button
        title="Present"
        onPress={() => {
          if (participationStatus === "PRESENT") {
            dispatch(cancel(eventId));
          } else {
            dispatch(approve(eventId));
          }
        }}
        color={participationStatus === "PRESENT" ? "#29D48C" : "blue"}
      />
      <Button
        title="Absent"
        onPress={() => {
          if (participationStatus === "ABSENT") {
            dispatch(cancel(eventId));
          } else {
            dispatch(refuse(eventId));
          }
        }}
        color={participationStatus === "ABSENT" ? "#EF4948" : "blue"}
      />
    </>
  );
};

export default ParticipationStatus;
