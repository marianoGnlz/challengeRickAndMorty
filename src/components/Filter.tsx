import React, { Fragment } from 'react'

function Filter() {
    return (
        <Fragment>
            <p>Filters</p>
          <form>
            <div className="form-check">
              <input
                type="radio"
                name="filter"
                id="radio1"
                className="form-check-input"
                checked
              />
              <label htmlFor="radio1" className="form-check-label">Option 1</label>
            </div>
            <div className="form-check input-filter">
              <input
                type="radio"
                name="filter"
                id="radio2"
                className="form-check-input"
              />
              <label htmlFor="radio2" className="form-check-label">Option 1</label>
            </div>
            <div className="form-check input-filter">
              <input
                type="radio"
                name="filter"
                id="radio3"
                className="form-check-input"
              />
              <label htmlFor="radio3" className="form-check-label">Option 1</label>
            </div>
          </form>
        </Fragment>
    )
}


export default Filter;