import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { v4 } from "uuid";

import Card from "./Card";

type Character = {
  name: string;
  image: string;
};

type Props = {
  setPagination: Function;
  setLoading: Function;
};

const Charactercard = ({ setPagination, setLoading }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([
    { name: "", image: "" },
  ]);
  const query = gql`
    {
      characters {
        info {
          count
          pages
        }
        results {
          name
          image
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    if (!loading) {
      setLoading(loading);
    }
    if (data && !loading && !error) {
      setPagination(data.characters.info.pages);
      console.log(data);
      setCharacters(data.characters.results);
    }
  }, [data, loading, error]);

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
