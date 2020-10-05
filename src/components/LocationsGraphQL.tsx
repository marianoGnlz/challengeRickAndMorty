import React, { Fragment, useEffect, useState } from "react";
import { v4 } from "uuid";

import ModalLocation from "./ModalLocations";

type Props = {
  setPagination: Function;
  setLoading: Function;

  data: any;
  loading: boolean;
};

type Location = {
  name: string;
  dimension: string;
  type: string;
  residents: Character[];
};

type Character = {
  name: string;
  image: string;
};

const Locations = ({ setPagination, setLoading, data, loading }: Props) => {
  const [locations, setLocations] = useState<Location[]>([
    {
      name: "",
      dimension: "",
      type: "",
      residents: [{ name: "", image: "" }],
    },
  ]);

  useEffect(() => {
    if (!loading) {
      setLoading(loading);
    }

    if (data && data.locations && !loading) {
      setPagination(data.locations.info.pages);
      setLocations(data.locations.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);
  return (
    <Fragment>
      <div className="row row-cols-lg-4 row-cols-xs-1 row-cols-sm-3 row-cols-md-3">
        {locations.map((location) => (
          <ModalLocation
            key={v4()}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Locations;
