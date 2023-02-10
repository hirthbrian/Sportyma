import { format } from "date-fns";

import Text from "../../atoms/TextKanit";
import DayPill from "../../molecules/DayPill";

import { Container } from "./styles";
import { Props } from "./types";

const PageHeader = ({ title, date }: Props) => {
  return (
    <Container>
      <DayPill date={date} />
      <Text size={20}>{format(new Date(date), "HH:mm")}</Text>
    </Container>
  );
};

export default PageHeader;
