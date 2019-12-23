/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const filter = ({ title, onFilterSelect, types }) => (
  <div className="filter">
    <h4>{title}</h4>
    <ul aria-label={`${title} category`} onClick={onFilterSelect}>
      {
                    (types).map((type, index) => (
                      <li key={index}>
                        <div className="custom-control custom-radio">
                          <input type="radio" id={title + type} name={title} value={type} className="custom-control-input" />
                          <label className="custom-control-label" htmlFor={title + type}>
                            {type}
                            {' '}
                          </label>
                        </div>
                      </li>
                    ))
                }
    </ul>
  </div>
);

export default filter;
