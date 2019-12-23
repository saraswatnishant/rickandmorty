/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const Dropdown = (props) => {
  const [dropdownClasses, setDropdownClasses] = useState(['dropdown-menu', 'dropdown-menu-right'].join(' '));
  const dropdownREf = React.createRef();

  const toggleDropdwon = (e) => {
    e.preventDefault();
    if (dropdownClasses.includes('show')) {
      setDropdownClasses(['dropdown-menu', 'dropdown-menu-right'].join(' '));
      dropdownREf.current.setAttribute('aria-expanded', false);
    } else {
      setDropdownClasses(['dropdown-menu', 'dropdown-menu-right', 'show'].join(' '));
      dropdownREf.current.setAttribute('aria-expanded', true);
    }
  };

  const hideDrodown = () => {
    setDropdownClasses(['dropdown-menu', 'dropdown-menu-right'].join(' '));
    dropdownREf.current.setAttribute('aria-expanded', false);
  };

  const { id, label, items } = props;
  return (
    <div className="dropdown show">
      <a ref={dropdownREf} className="btn btn-secondary dropdown-toggle" href="#" role="button" id={id} aria-haspopup="true" aria-expanded="false" onClick={toggleDropdwon}>
        {label}
      </a>
      <div className={dropdownClasses} aria-labelledby={id}>
        {
        (items).map((item, index) => (
          (item === 'divider')
            ? <div className="dropdown-divider" />
            // eslint-disable-next-line react/no-array-index-key
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            : <a className="dropdown-item" href="#" key={index} onClick={(e) => { hideDrodown(); props.onItemClick(e); }}>{item}</a>
        ))
                }
      </div>
    </div>
  );
};

export default Dropdown;
