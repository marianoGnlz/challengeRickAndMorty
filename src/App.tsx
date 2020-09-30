import React, { Fragment, useEffect, useState } from "react";
import "./css/styles.css";

import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

import Characters from "./components/CharacterGraphQL";
import Locations from "./components/LocationsGraphQL";

import {
  useQueryCharacters,
  useQueryCharacter,
  useQueryLocations,
} from "../src/querys/querys";

function App() {
  const [pagination, setPagination] = useState<number>(0);
  const [loadingg, setLoading] = useState<boolean>(true);
  const [actualPage, setActualPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [actualFilter, setActualFilter] = useState<string>("Characters");

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [dataa, setData] = useState(undefined);

  const { data: dataPage, loading: loadingPage } = useQueryCharacters(
    actualPage
  );
  const { data: dataChar, loading: loadingChar } = useQueryCharacter(search);

  const { data: dataLocations, loading: loadingLocations } = useQueryLocations(
    actualPage
  );

  useEffect(() => {
    if (actualFilter === "Characters" && !search && dataPage && !loadingPage) {
      setLoading(loadingPage);
      setData(dataPage);
      return;
    }

    if (actualFilter === "Characters" && search && dataChar && !loadingChar) {
      setLoading(loadingChar);

      setData(dataChar);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPage, loadingPage, dataChar, loadingChar, search, actualFilter]);

  useEffect(() => {
    if (
      actualFilter === "Locations" &&
      !search &&
      dataLocations &&
      !loadingLocations
    ) {
      setLoading(loadingLocations);
      setData(dataLocations);
      return;
    }
    if (
      actualFilter === "Locations" &&
      search &&
      dataLocations &&
      !loadingLocations
    ) {
      setLoading(loadingLocations);
      setData(dataLocations);
      return;
    }
  }, [dataLocations, loadingLocations, actualFilter, search]);

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
                dataa={dataa}
                loadingg={loadingg}
              />
            ) : (
              <Locations
                setPagination={setPagination}
                setLoading={setLoading}
                dataa={dataa}
                loadingg={loadingg}
              />
            )}
          </div>
          <Pagination
            pages={pagination}
            loadingg={loadingg}
            actualPage={actualPage}
            setActualPage={setActualPage}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
