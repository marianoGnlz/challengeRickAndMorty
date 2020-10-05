import React, { Fragment } from "react";

type Props = {
  setShowFilter: Function;
  setActualFilter: Function;
};

function Filter({ setShowFilter, setActualFilter }: Props) {
  return (
    <Fragment>
      <div className="div-filter ">
        <p className="p-filter">Filters</p>
        <button
          type="button"
          className="close-btn close"
          aria-label="Close"
          onClick={() => setShowFilter(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form className="form-filter">
        <div className="form-check">
          <input
            type="radio"
            name="filter"
            id="radio1"
            className="form-check-input"
            onClick={() => setActualFilter("Characters")}
          />
          <label htmlFor="radio1" className="form-check-label">
            Characters
          </label>
        </div>
        <div className="form-check input-filter">
          <input
            type="radio"
            name="filter"
            id="radio2"
            className="form-check-input"
            onClick={() => setActualFilter("Locations")}
          />
          <label htmlFor="radio2" className="form-check-label">

            Locations
          </label>
        </div>
        <div className="form-check input-filter">
          <input
            type="radio"
            name="filter"
            id="radio3"
            className="form-check-input"
            onClick={() => setActualFilter("Episodes")}
          />
          <label htmlFor="radio3" className="form-check-label">
            Episodes
          </label>
        </div>
      </form>
    </Fragment>
  );
}

export default Filter;
