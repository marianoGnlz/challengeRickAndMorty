import React, { Fragment, useEffect, useState } from "react";
import { v4 } from "uuid";


import Card from "./Card";

type Character = {
  name: string;
  image: string;
};

type Props = {
  setPagination: Function;
  setLoading: Function;
  dataa: any;
  loadingg: boolean
};

const Charactercard = ({ setPagination, setLoading, dataa, loadingg }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([
    { name: "", image: "" },
  ]);
  


  useEffect(() => {
    if (!loadingg) {
      setLoading(loadingg);
    }
    if (dataa && !loadingg) {
      
      setPagination(dataa.characters.info.pages);
      setCharacters(dataa.characters.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataa, loadingg]);

  return (
    <Fragment>
      <div className="row row-cols-lg-4 row-cols-xs-1 row-cols-sm-3 row-cols-md-3">
        {characters.map((char) => (
          <Card key={v4()} name={char.name} image={char.image} />
        ))}
      </div>
    </Fragment>
  );
};

export default Charactercard;
