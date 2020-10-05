import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";

import CardEpisode from './CardEpisode';
import CharacterCard from "./CharacterCard";

import { v4 } from "uuid";

type Props = {
    name: string;
    air_date: string;
    episode: string;
    characters: Character[];
}

type Character = {
    name: string;
    image: string;
}

const ModalEpisode = ({ name, air_date, episode, characters }: Props) => {
  const [show, setShow] = useState(false);
  const [fiveCharacters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setCharacters(characters.slice(0, 5));
  }, [characters]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <CardEpisode
        key={v4()}
        name={name}
        episode={episode}
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
                <span>Release date: </span>
                {air_date}
              </p>
              <p>
                <span>Episode: </span>
                {episode}
              </p>
              <p>
                <span>Characters: </span>
              </p>
              <Card.Footer>
                <Row xs={1} md={4}>
                  {fiveCharacters.map((character) => (
                    <CharacterCard
                      key={v4()}
                      name={character.name}
                      image={character.image}
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
export default ModalEpisode;
