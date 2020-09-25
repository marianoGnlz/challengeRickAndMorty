import React, { Fragment } from "react";

function Filter() {
  return (
    <Fragment>
      <div className="div-filter">
        <p className="p-filter">Filters</p>
        <button type="button" className="close" aria-label="Close">
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
          />
          <label htmlFor="radio1" className="form-check-label">
            Option 1
          </label>
        </div>
        <div className="form-check input-filter">
          <input
            type="radio"
            name="filter"
            id="radio2"
            className="form-check-input"
          />
          <label htmlFor="radio2" className="form-check-label">
            Option 2
          </label>
        </div>
        <div className="form-check input-filter">
          <input
            type="radio"
            name="filter"
            id="radio3"
            className="form-check-input"
          />
          <label htmlFor="radio3" className="form-check-label">
            Option 3
          </label>
        </div>
      </form>
    </Fragment>
  );
}

export default Filter;
