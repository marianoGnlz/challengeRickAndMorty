import React, { Fragment, useEffect, useState } from "react";
import "./css/styles.css";

import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

import Characters from "./components/CharacterGraphQL";
import Locations from "./components/LocationsGraphQL";
import Episodes from "./components/EpisodesGraphQL";

import {
  useQueryCharacter,
  useQueryLocation,
  useQueryEpisodes,
} from "../src/querys/querys";

function App() {
  const [pagination, setPagination] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [actualPage, setActualPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [actualFilter, setActualFilter] = useState<string>("Characters");

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [data, setData] = useState(undefined);

  const { data: dataChar, loading: loadingChar } = useQueryCharacter({
    search,
    actualPage,
  });

  const { data: dataLocation, loading: loadingLocation } = useQueryLocation({
    search,
    actualPage,
  });

  const { data: dataEpisodes, loading: loadingEpisodes } = useQueryEpisodes({
    search,
    actualPage,
  });

  useEffect(() => {
    if (actualFilter === "Characters" && dataChar && !loadingChar) {
      setLoading(loadingChar);
      setData(dataChar);
    }
  }, [dataChar, loadingChar, actualFilter]);

  useEffect(() => {
    if (actualFilter === "Locations" && dataLocation && !loadingLocation) {
      setLoading(loadingLocation);
      setData(dataLocation);
    }
  }, [actualFilter, dataLocation, loadingLocation]);

  useEffect(() => {
    if (actualFilter === "Episodes" && dataEpisodes && !loadingEpisodes) {
      setLoading(loadingEpisodes);
      setData(dataEpisodes);
    }
  }, [actualFilter, dataEpisodes, loadingEpisodes]);

  return (
    <Fragment>
      <Navbar setSearch={setSearch} setShowFilter={setShowFilter} />
      <div className="row">
        {showFilter ? (
          <div className="col-2 custom-color-4 pt-4">
            <Filter
              setShowFilter={setShowFilter}
              setActualFilter={setActualFilter}
            />
          </div>
        ) : null}
        <div className={showFilter ? "col-10 mt-3" : "col-12 mt-3"}>
          <div className="container-fluid">
            {actualFilter === "Characters" ? (
              <Characters
                setPagination={setPagination}
                setLoading={setLoading}
                data={data}
                loading={loading}
              />
            ) : actualFilter === "Locations" ? (
              <Locations
                setPagination={setPagination}
                setLoading={setLoading}
                data={data}
                loading={loading}
              />
            ) : (
              <Episodes
                setPagination={setPagination}
                setLoading={setLoading}
                data={data}
                loading={loading}
              />
            )}
          </div>
          <Pagination
            pages={pagination}
            loading={loading}
            actualPage={actualPage}
            setActualPage={setActualPage}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
