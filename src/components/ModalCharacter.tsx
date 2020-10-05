import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CardCharacter from "../components/CharacterCard";

import { v4 } from "uuid";

type Props = {
  name: string;
  image: string;
  type: string;
  gender: string;
  species: string;
};

const ModalCharacter = ({ name, image, type, gender, species }: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <CardCharacter
        key={v4()}
        name={name}
        image={image}
        handleShow={handleShow}
      />

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardCharacter
            key={v4()}
            name={name}
            image={image}
            handleShow={():any => {
              return null;
            }}
            card={true}
          />
          <p>
            <span>Type:</span> {type ? type : "unknown"}{" "}
          </p>
          <p>
            <span>Gender:</span> {gender ? gender : "unknown"}{" "}
          </p>
          <p>
            <span>Specie:</span> {species ? species : "unknown"}{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default ModalCharacter;
