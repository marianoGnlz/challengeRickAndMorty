import React, { Fragment, useState } from "react";
import image from '../static/Titulo.png';
type Props = {
  setSearch: Function;
  setShowFilter: Function;
};

function Navbar({ setSearch, setShowFilter }: Props) {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <nav className="navbar navbar-dark custom-color-4 nav-bar">
        <a className="navbar-brand" href="/#">
          <img className="img-titulo" src={image} alt=""/>
        </a>
        <ul className="navbar-nav mr-auto ml-3">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                setShowFilter(true);
              }}
            >
              Filters
            </a>
          </li>
        </ul>
        <form className="form-inline" id="search">
          <input
            className="search form-control mr-sm-2 custom-color-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="navbar-button btn custom-color-3 my-2 my-sm-0"
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              setSearch(value);
            }}
          >
            Search
          </button>
        </form>
      </nav>
    </Fragment>
  );
}

export default Navbar;
