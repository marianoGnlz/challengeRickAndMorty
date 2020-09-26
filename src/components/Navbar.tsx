import React, { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light mb-3">
        <a className="navbar-brand" href="/#">Home</a>
        <form className="form-inline">
          <input
            className="search form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </Fragment>
  );
}

export default Navbar;