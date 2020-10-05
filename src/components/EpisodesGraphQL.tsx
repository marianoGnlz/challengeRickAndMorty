import React, { Fragment, useState, useEffect } from "react";
import { v4 } from "uuid";

import ModalEpisode from './ModalEpisode';

type Props = {
  setPagination: Function;
  setLoading: Function;

  data: any;
  loading: boolean;
};

type Episode = {
    name: string;
    air_date: string;
    episode: string;
    characters: Character[];
}

type Character = {
    name: string;
    image: string;
}


const Episodes = ({ setPagination, setLoading, data, loading }: Props) => {
  const [episodes, setEpisodes] = useState<Episode[]>([
    {
      name: "",
      air_date: "",
      episode: "",
      characters: [{ name: "", image: "" }],
    },
  ]);

  useEffect(() => {
    if (!loading) {
      setLoading(loading);
    }

    if (data && data.episodes && !loading) {
      setPagination(data.episodes.info.pages);
      setEpisodes(data.episodes.results);
      console.log(episodes)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);
  return (
    <Fragment>
      <div className="row row-cols-lg-4 row-cols-xs-1 row-cols-sm-3 row-cols-md-3">
        {episodes.map((episode) => (
          <ModalEpisode
            key={v4()}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            characters={episode.characters}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Episodes;
