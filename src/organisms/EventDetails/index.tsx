import { format } from "date-fns";

import SectionTitle from "../../atoms/SectionTitle";

import DetailContainer from "../../molecules/DetailContainer";

import { Props } from "./types";

const calendarIcon = require("../../../assets/calendar.png");
const positionIcon = require("../../../assets/location.png");

const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const EventDetails = ({ title, startDate, endDate, location }: Props) => {
  console.log(startDate);
  return (
    <>
      <SectionTitle title={title} />
      <DetailContainer
        title={capitalizeFirstLetter(
          format(new Date(startDate), "eeee d MMMM yyyy")
        )}
        subTitle={`${format(new Date(startDate), "HH:mm")} - ${format(
          new Date(endDate),
          "HH:mm"
        )}`}
        icon={calendarIcon}
      />
      <DetailContainer
        title={location.place}
        subTitle={`${location.address},\n${location.city}`}
        icon={positionIcon}
      />
    </>
  );
};

export default EventDetails;
