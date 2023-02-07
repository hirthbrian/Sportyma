import { Container, Day } from "./styles";

import { Props } from "./types";

const DayPill = ({ date }: Props) => {
  const day = new Date(date).getDay();
  const month = new Date(date)
    .toLocaleString("fr", { month: "long" })
    .toUpperCase();

  return (
    <Container>
      <Day style={{ fontSize: 12 }}>{`${day} ${month}`}</Day>
    </Container>
  );
};

export default DayPill;
