import styled from "styled-components/native";

import { Colors } from "../types";

interface Props {
  size?: number;
  color?: string;
  weight?: number;
}

export default styled.Text`
  font-family: ${(props: Props) => {
    if (props.weight === 300) return "Kanit-Light";
    else if (props.weight === 400) return "Kanit-Regular";
    else if (props.weight === 500) return "Kanit-Medium";
    return "Kanit-Regular";
  }};
  font-size: ${(props: Props) => props.size || 16}px;
  color: ${(props: Props) => props.color || Colors.Black};
`;
