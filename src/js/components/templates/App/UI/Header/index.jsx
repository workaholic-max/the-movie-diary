import React from 'react';

import HeaderActions from './HeaderActions';

const Header = () => (
  <header className="header">
    <h1 className="header__logo">The Movie Diary</h1>

    <HeaderActions />
  </header>
);

export default Header;
