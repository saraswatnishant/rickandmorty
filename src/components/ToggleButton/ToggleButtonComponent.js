import React from 'react';

const toggleButtonComponent = ({ onToggleSidebar }) => (
  <button type="button" className="rickmrty-toggle-btn" aria-label="Toggle side menu bar" onClick={onToggleSidebar}>
    <i className="fa fa-bars" aria-hidden="true" />
  </button>
);

export default toggleButtonComponent;
