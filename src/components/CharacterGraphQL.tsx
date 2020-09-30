import React, { Fragment, useEffect, useState } from "react";
import { getNameOfDeclaration } from "typescript";
import ModalCustom from '../components/ModalCustom';


type Character = {
  name: string;
  image: string;
  type: string;
  gender: string;
  species: string
};

type Props = {
  setPagination: Function;
  setLoading: Function;
  dataa: any;
  loadingg: boolean
};

const Characters = ({ setPagination, setLoading, dataa, loadingg }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([
    { name: "", image: "", type: "", gender: "", species: "" },
  ]);
  


  useEffect(() => {
    if (!loadingg) {
      setLoading(loadingg);
    }
    if (dataa && dataa.characters && !loadingg) {
      
      setPagination(dataa.characters.info.pages);
      setCharacters(dataa.characters.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataa, loadingg]);

  return (
    <Fragment>
      <div className="row row-cols-lg-4 row-cols-xs-1 row-cols-sm-3 row-cols-md-3">
        {characters.map((char) => (
          <ModalCustom 
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
