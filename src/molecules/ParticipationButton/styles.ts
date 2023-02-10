import styled from "styled-components/native";

import { KanitText } from "../../atoms";

interface ContainerProps {
  color: string;
  isActive: boolean;
}

export const PressableContainer = styled.Pressable`
  flex: 1;
`;

export const Container = styled.View`
  height: 50px;
  background-color: ${(props: ContainerProps) =>
    props.isActive ? props.color : "#FFFFFF"};
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${(props: ContainerProps) =>
    props.isActive ? props.color : "#2559f233"};
  border-width: 2px;
`;

export const Text = styled(KanitText)`
  letter-spacing: 1px;
  color: ${(props: ContainerProps) => (props.isActive ? "#FFFFFF" : "#2559F2")};
`;

export const Image = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  tint-color: ${(props: ContainerProps) =>
    props.isActive ? "#FFFFFF" : "#2559F2"};
`;
