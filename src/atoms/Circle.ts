import styled from "styled-components";

interface Props {
  size?: number;
  color?: string;
}

export default styled.View`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  width: ${(props: Props) => props.size}px;
  height: ${(props: Props) => props.size}px;
  background-color: ${(props: Props) => props.color};
  border-radius: ${(props: Props) => props.size / 2}px;
`;
