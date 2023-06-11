import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SearchMovieContext from '../../../../../context/SearchMovieContext';
import SearchIcon from '../../../../atoms/SvgIcons/SearchIcon';

const Header = () => {
  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  return (
    <header className="gl-header">
      <Link to="/" className="gl-header__link">
        <h1 className="gl-header__logo">The Movie Diary</h1>
      </Link>

      <div className="gl-header__link" onClick={handleOpenSearchMovieModal}>
        <SearchIcon />
        Search
      </div>
    </header>
  );
};

export default Header;
