import React from 'react';
import { Link } from 'react-router-dom';

import NavigationMenu from './NavigationMenu';

const Header = () => (
  <header className="gl-header">
    <Link to="/" className="gl-header__logo">
      <h1>The Movie Diary</h1>
    </Link>

    <NavigationMenu />
  </header>
);

export default Header;
