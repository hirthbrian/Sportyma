import SectionTitle from "../../atoms/SectionTitle";

import Text from "../../atoms/TextKanit";

import { Props } from "./types";

const Information = ({ info }: Props) => {
  return (
    <>
      <SectionTitle title="Informations" />
      <Text weight={300} color="#152D4B">
        {info}
      </Text>
    </>
  );
};

export default Information;
