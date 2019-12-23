import React from 'react';
import UserMenu from '../UserMenu/UserMenuComponent';

const nav = () => (
  <nav className="rickmrty-nav nav nav-pills nav-justified">
    <a className="nav-item nav-link" href="/">Home</a>
    <a className="nav-item nav-link" href="/">About</a>
    <UserMenu />
  </nav>
);

export default nav;
