import React from 'react';

const searchInputComponent = ({ handleSubmit, searchInputRef }) => (
  <form className="rickmrty-search-form-wrapper" onSubmit={handleSubmit}>
    <div className="input-group">
      <input type="text" className="form-control search-char" placeholder="Search for character..." ref={searchInputRef} />
      <div className="input-group-append">
        <button className="btn btn-light search-btn" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  </form>

);

export default searchInputComponent;
