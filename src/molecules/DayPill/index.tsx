import { format } from "date-fns";

import { Container, Day } from "./styles";

import { Props } from "./types";

const DayPill = ({ date }: Props) => {
  return (
    <Container>
      <Day style={{ fontSize: 12 }}>
        {format(new Date(date), "d MMMM").toUpperCase()}
      </Day>
    </Container>
  );
};

export default DayPill;
