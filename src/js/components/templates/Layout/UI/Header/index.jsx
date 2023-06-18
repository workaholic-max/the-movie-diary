import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../../../context/AuthContext';
import SearchMovieContext from '../../../../../context/SearchMovieContext';
import SearchIcon from '../../../../atoms/SvgIcons/SearchIcon';

const Header = () => {
  const { user } = useContext(AuthContext);

  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  return (
    <header className="gl-header">
      <h1 className="gl-header__logo">The Movie Diary</h1>

      <div className="gl-header__links">
        <Link to="/" className="gl-header__link">
          Home
        </Link>

        <div className="gl-header__link" onClick={handleOpenSearchMovieModal}>
          <SearchIcon />
          Search
        </div>
      </div>

      <Link to="/account" className="gl-header__account">
        <img src={user.photoURL} alt="user icon" />
      </Link>
    </header>
  );
};

export default Header;
