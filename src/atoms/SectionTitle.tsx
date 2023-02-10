import styled from "styled-components";

import KanitText from "./KanitText";

const Text = styled(KanitText)``;

export default ({ title }) => (
  <Text weight={500} size={20}>
    {title}
  </Text>
);
