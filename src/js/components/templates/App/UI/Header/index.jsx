import React from 'react';

import HeaderActions from './HeaderActions';

const Header = () => (
  <header className="gl-header">
    <h1 className="gl-header__logo">The Movie Diary</h1>

    <HeaderActions />
  </header>
);

export default Header;
