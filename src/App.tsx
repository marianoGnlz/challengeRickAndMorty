import React, { Fragment } from "react";
import "./css/styles.css";
import Filter from "./components/Filter";
import Navbar from './components/Navbar';

import CharacterCard from './components/CharacterCard';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="row">
        <div className="col-3">
          <Filter />
        </div>
        <div className="col-9">
          <div className="container-fluid">
            <CharacterCard />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
