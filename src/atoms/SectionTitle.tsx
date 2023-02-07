import styled from "styled-components";

import TextKanit from "./TextKanit";

const Text = styled(TextKanit)``;

export default ({ title }) => (
  <Text weight={500} size={20}>
    {title}
  </Text>
);
