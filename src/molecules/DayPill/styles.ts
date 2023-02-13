import styled from "styled-components/native";

import { KanitText } from "../../atoms";
import { Colors } from "../../types";

export const Container = styled.View`
  background-color: ${Colors.BluePrimary};
  border-radius: 30px;
`;

export const Day = styled(KanitText)`
  color: ${Colors.White};
  letter-spacing: 1px;
  padding: 4px 10px;
`;
