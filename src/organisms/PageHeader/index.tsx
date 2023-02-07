import Text from "../../atoms/TextKanit";
import DayPill from "../../molecules/DayPill";
import BigHour from "../../molecules/BigHour";

import { Container } from "./styles";
import { Props } from "./types";

const PageHeader = ({ title, date }: Props) => {
  return (
    <Container>
      <Text size={22} style={{ fontSize: 22 }}>
        {title}
      </Text>
      <DayPill date={date} />
      <BigHour date={date} />
    </Container>
  );
};

export default PageHeader;
