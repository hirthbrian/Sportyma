import SectionTitle from "../../atoms/SectionTitle";

import KanitText from "../../atoms/KanitText";

import { Props } from "./types";

const Information = ({ info }: Props) => {
  return (
    <>
      <SectionTitle title="Informations" />
      <KanitText weight={300} color="#152D4B">
        {info}
      </KanitText>
    </>
  );
};

export default Information;
