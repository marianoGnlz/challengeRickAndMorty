import React, { Fragment } from "react";
import { v4 } from "uuid";

type Props = {
  image: string;
  name: string;

  handleShow: Function;
};


const CardCharacter = ({ image, name, handleShow }: Props) => {
  return (
    <Fragment>
      <div className="col mb-3" onClick={() => handleShow()}>
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
