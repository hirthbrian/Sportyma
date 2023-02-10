import { Platform, Linking } from "react-native";
import { format } from "date-fns";

import SectionTitle from "../../atoms/SectionTitle";

import DetailContainer from "../../molecules/DetailContainer";

import { Props } from "./types";

const calendarIcon = require("../../../assets/calendar.png");
const positionIcon = require("../../../assets/location.png");

const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const EventDetails = ({ title, startDate, endDate, location }: Props) => {
  const fullDate = capitalizeFirstLetter(
    format(new Date(startDate), "eeee d MMMM yyyy")
  );
  const dateHours = `${format(new Date(startDate), "HH:mm")} - ${format(
    new Date(endDate),
    "HH:mm"
  )}`;

  const onLocationPress = () => {
    const fullAddress = `${location.place} ${location.address} ${location.city}`;
    const url = Platform.select({
      ios: `maps:0,0?q=${fullAddress}`,
      android: `geo:0,0?q=${fullAddress}`,
    });

    Linking.openURL(url);
  };

  return (
    <>
      <SectionTitle title={title} />
      <DetailContainer
        title={fullDate}
        subTitle={dateHours}
        icon={calendarIcon}
      />
      <DetailContainer
        title={location.place}
        subTitle={`${location.address},\n${location.city}`}
        icon={positionIcon}
        onPress={onLocationPress}
      />
    </>
  );
};

export default EventDetails;
