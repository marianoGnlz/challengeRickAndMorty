import React, { Fragment } from "react";

type Props = {
  image: string;
  name: string;
};

const CardCharacter = ({ image, name }: Props) => {
  return (
    <Fragment>
      <div className="col mb-3">
        <div className="card text-center border-card">
          <img src={image} className="card-img-top card" alt="..." />
          <div className="card-body">
            <p className="card-title">{name}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardCharacter;
