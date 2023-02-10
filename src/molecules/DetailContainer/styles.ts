import styled from "styled-components";

interface ImageProps {
  color: string;
}

export const Container = styled.Pressable`
  padding-top: 15px;
  flex-direction: row;
`;

export const Day = styled.Text`
  color: #ffffff;
  padding: 4px 10px;
`;

export const Image = styled.Image`
  width: 18px;
  height: 18px;
  tint-color: ${(props: ImageProps) => props.color};
`;
