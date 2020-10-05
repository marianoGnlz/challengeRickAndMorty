import React, { Fragment, useEffect, useState } from "react";
import ModalCharacter from "../components/ModalCharacter";
import { v4 } from "uuid";

type Character = {
  name: string;
  image: string;
  type: string;
  gender: string;
  species: string;
};

type Props = {
  setPagination: Function;
  setLoading: Function;
  data: any;
  loading: boolean;
};

const Characters = ({ setPagination, setLoading, data, loading }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([
    { name: "", image: "", type: "", gender: "", species: "" },
  ]);

  useEffect(() => {
    if (!loading) {
      setLoading(loading);
    }
    if (data && data.characters && !loading) {
      setPagination(data.characters.info.pages);
      setCharacters(data.characters.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <Fragment>
      <div className="row row-cols-lg-4 row-cols-xs-1 row-cols-sm-3 row-cols-md-3">
        {characters.map((char) => (
          <ModalCharacter
            key={v4()}
            name={char.name}
            image={char.image}
            type={char.type}
            gender={char.gender}
            species={char.species}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Characters;
