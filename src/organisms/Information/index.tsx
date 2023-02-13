import { SectionTitle, KanitText } from "../../atoms";

import { Props } from "./types";
import { Colors } from "../../types";

const Information = ({ info }: Props) => {
  return (
    <>
      <SectionTitle title="Informations" />
      <KanitText weight={300} color={Colors.Black}>
        {info}
      </KanitText>
    </>
  );
};

export default Information;
