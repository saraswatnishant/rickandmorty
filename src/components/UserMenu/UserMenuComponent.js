/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ProfileImg from '../../assets/images/profile_pic.jpeg';


const UserMenu = () => {
  const [dropdownClasses, setDropdownClasses] = useState(['dropdown-menu', 'dropdown-menu-right'].join(' '));
  const userMenuREf = React.createRef();
  const toggleDropdwon = (e) => {
    e.preventDefault();
    if (dropdownClasses.includes('show')) {
      setDropdownClasses(['dropdown-menu', 'dropdown-menu-right'].join(' '));
      userMenuREf.current.setAttribute('aria-expanded', false);
    } else {
      setDropdownClasses(['dropdown-menu', 'dropdown-menu-right', 'show'].join(' '));
      userMenuREf.current.setAttribute('aria-expanded', true);
    }
  };
  return (
    <div className="user-menu-wrapper">
      <a href="" className="nav-item nav-link rickmrty-user-menu" ref={userMenuREf} id="userMenu" role="button" aria-haspopup="true" aria-expanded="false" onClick={toggleDropdwon}>
        <img alt="User profile pic" src={ProfileImg} />
        <span className="">Nishant</span>
      </a>
      <div className={dropdownClasses} aria-labelledby="userMenu">
        <a className="dropdown-item" href="/">
          <i className="fa fa-fw fa-user-circle" />
          {' '}
&nbsp; My Account
        </a>
        <a className="dropdown-item" href="/">
          <i className="fa fa-fw fa-cog" />
          {' '}
&nbsp; Settings
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/">
          <i className="fa fa-fw fa-sign-out-alt" />
          {' '}
&nbsp; Logout
        </a>
      </div>
    </div>
  );
};

export default UserMenu;
