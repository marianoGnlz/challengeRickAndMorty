import React, { Fragment } from "react";

type Props = {
  image: string;
  name: string;

  handleShow: Function;
  card?: boolean;
};


const CardCharacter = ({ image, name, handleShow, card }: Props) => {
  return (
    <Fragment>
      <div className="col mb-3" onClick={() => handleShow()}>
        <div className="card text-center border-card">
          <img src={image} className="card-img-top card" alt="..." />
          <div className="card-body">
            <p className={card? "card-modal card-title" : "card-title"}>{name}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardCharacter;
