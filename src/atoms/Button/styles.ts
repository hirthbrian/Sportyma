import { StyleSheet } from "react-native";
import styled from "styled-components";

const Pressable = styled.Pressable``;

export default StyleSheet.create({
  button: {
    marginBottom: 15,
    backgroundColor: "#FFF",
    padding: 13,
    borderRadius: 50,
    borderColor: "rgba(37, 89, 242, 0.2)",
    borderWidth: 2,
    textAlign: "center",
  },
  text: {
    color: "#2559F2",
    fontWeight: "400",
    fontSize: 22,
    alignSelf: "center",
  },
});
