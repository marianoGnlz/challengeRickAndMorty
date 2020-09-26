import React, { Fragment, useEffect, useState } from "react";
import "./css/styles.css";

import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

import CharacterCard from "./components/CharacterGraphQL";

import { useQueryCharacter } from "../src/querys/querys";

function App() {
  const [pagination, setPagination] = useState<number>(0);
  const [loadingg, setLoading] = useState<boolean>(true);
  const [actualPage, setActualPage] = useState<number>(1);
  const [dataa, setData] = useState(undefined);

  const { data, loading } = useQueryCharacter(actualPage);

  useEffect(() => {
    if (data && !loading) {
      setLoading(loading);
      setData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  // useEffect(() => {return} , [actualPage])

  return (
    <Fragment>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Filter />
        </div>
        <div className="col-10">
          <div className="container-fluid">
            <CharacterCard
              setPagination={setPagination}
              setLoading={setLoading}
              dataa={dataa}
              loadingg={loadingg}
            />
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
