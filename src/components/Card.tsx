import React, { Fragment } from "react";

type Props = {
  image: string;
  name: string;
};

const Card = ({ image, name }: Props) => {
  return (
    <Fragment>
      <div className="col mb-3">
        <div className="card text-center">
          <img src={image} className="card-img-top card" alt="..." />
          <div className="card-body">
            <p className="card-title">{name}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
