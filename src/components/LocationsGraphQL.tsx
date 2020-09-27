import React, { Fragment, useEffect, useState } from "react";
import { v4 } from "uuid";

import CardLocations from "./CardLocation";

type Props = {
  setPagination: Function;
  setLoading: Function;

  dataa: any;
  loadingg: boolean;
};

type Location = {
  name: string;
  dimension: string;
};

const Locations = ({ setPagination, setLoading, dataa, loadingg }: Props) => {
  const [locations, setLocations] = useState<Location[]>([
    {
      name: "",
      dimension: "",
    },
  ]);

  useEffect(() => {
    if (!loadingg) {
      setLoading(loadingg);
    }

    if (dataa && dataa.locations && !loadingg) {
      setPagination(dataa.locations.info.pages);
      setLocations(dataa.locations.results);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataa, loadingg]);
  return (
    <Fragment>
      <div className="row row-cols-lg-4 row-cols-xs-1 row-cols-sm-3 row-cols-md-3">
        {locations.map((location) => (
          <CardLocations
            key={v4()}
            name={location.name}
            dimension={location.dimension}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Locations;
