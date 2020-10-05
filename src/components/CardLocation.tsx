import React, { Fragment } from "react";

type Props = {
  name?: string;
  dimension?: string;
  handleShow: Function;
};
 
const CardLocations = ({ name, dimension, handleShow }: Props) => {
  return (
    <Fragment>
      <div className="col mb-3" onClick={() => handleShow()}>
        <div className="card text-center border-card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{dimension}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardLocations;
