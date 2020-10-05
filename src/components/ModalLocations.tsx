import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import CardLocation from "../components/CardLocation";
import CharacterCard from "./CharacterCard";

import { v4 } from "uuid";

type Props = {
  name: string;
  dimension: string;
  type: string;
  residents: Character[];
};

type Character = {
  name: string;
  image: string;
};

const ModalLocation = ({ name, dimension, type, residents }: Props) => {
  const [show, setShow] = useState(false);
  const [fiveResidents, setResidents] = useState<Character[]>([]);

  useEffect(() => {
    setResidents(residents.slice(0, 5));
  }, [residents]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <CardLocation
        key={v4()}
        name={name}
        dimension={dimension}
        handleShow={handleShow}
      />

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <p>
                <span>Type: </span>
                {type}
              </p>
              <p>
                <span>Dimension: </span>
                {dimension}
              </p>
              <p>
                <span>Residents: </span>
              </p>
              <Card.Footer>
                <Row xs={1} md={4}>
                  {fiveResidents.map((resident) => (
                    <CharacterCard
                      key={v4()}
                      name={resident.name}
                      image={resident.image}
                      handleShow={():any => {
                        return null;
                      }}
                    />
                  ))}
                </Row>
              </Card.Footer>
            </Card.Body>
          </Card>
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
export default ModalLocation;
