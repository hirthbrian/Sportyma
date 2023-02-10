import styled from "styled-components";

import TextKanit from "../../atoms/TextKanit";

interface ContainerProps {
  color: string;
  isActive: boolean;
}

export const Container = styled.Pressable`
  background-color: ${(props: ContainerProps) =>
    props.isActive ? props.color : "#FFFFFF"};
  border-radius: 50px;
  width: 160px;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-color: #2559f233;
  border-width: ${(props: ContainerProps) => (props.isActive ? 0 : 2)}px;
`;

export const Text = styled(TextKanit)`
  padding-left: 10px;
  letter-spacing: 1px;
  color: ${(props: ContainerProps) => (props.isActive ? "#FFFFFF" : "#2559F2")};
`;

export const Image = styled.Image`
  width: 18px;
  height: 18px;
  tint-color: ${(props: ContainerProps) =>
    props.isActive ? "#FFFFFF" : "#2559F2"};
`;
