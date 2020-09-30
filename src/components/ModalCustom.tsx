import React, { Fragment, ReactNode, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CardCharacter from "../components/CharacterCard";

import { v4 } from "uuid";

type Props = {
  name: string;
  image: string;
  type: string;
  gender: string;
  species: string
};

const ModalCustom = ({ name, image, type, gender, species }: Props) => {
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardCharacter
            key={v4()}
            name={name}
            image={image}
            handleShow={handleShow}
          />
          <p> {type} </p>
          <p> {gender} </p>
          <p> {species} </p>
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
export default ModalCustom;
