import styled from "styled-components";

import KanitText from "../../atoms/KanitText";

interface ContainerProps {
  color: string;
  isActive: boolean;
}

export const Container = styled.View`
  background-color: ${(props: ContainerProps) =>
    props.isActive ? props.color : "#FFFFFF"};
  border-radius: 50px;
  height: 50px;
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
