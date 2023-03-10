import { format } from "date-fns";

import { KanitText } from "../../atoms";
import { DayPill } from "../../molecules";

import { Container } from "./styles";
import { Props } from "./types";

const PageHeader = ({ date }: Props) => {
  return (
    <Container>
      <DayPill date={date} />
      <KanitText size={20}>{format(new Date(date), "HH:mm")}</KanitText>
    </Container>
  );
};

export default PageHeader;
