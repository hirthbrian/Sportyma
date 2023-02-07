import Text from "../../atoms/TextKanit";

import { Props } from "./types";

const BigHour = ({ date }: Props) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return <Text size={20}>{`${hours}:${minutes}`}</Text>;
};

export default BigHour;
