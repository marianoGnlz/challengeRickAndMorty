import React, { Fragment, useState } from "react";
import "./css/styles.css";


import Filter from "./components/Filter";
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

import CharacterCard from './components/CharacterGraphQL';

function App() {
  const [pagination, setPagination] = useState<number>(0);
  const [loading, setLoading] = useState(true)
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
            />
          </div>
          <Pagination 
            pages={pagination}
            loading={loading}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
