import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const Charactercard = () => {
    const [image, setImage] = useState('')
  const query = gql`
    {
      characters {
        results {
          name
          image
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    if(data && !loading && !error){
        console.log(data)
        setImage(
            `${data.characters.results[0].image}`
        )
    }
  }, [data, loading, error]);

  return (
    <Fragment>
      <div className="card">
        <img src={image} className="card-img-top card" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Charactercard;
