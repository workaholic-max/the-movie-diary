import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import SearchMovieContext from '../../../../../context/SearchMovieContext';
import Button from '../../../../atoms/Button';
import SearchIcon from '../../../../atoms/SvgIcons/SearchIcon';

// TODO: not all actions work yet
const NavigationMenu = () => {
  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  const defaultNavLinkClassName = 'gl-header-nav-menu__link';

  const getNavLinkClassName = ({ isActive }) => {
    const activeClassName = isActive ? `${defaultNavLinkClassName}--active` : '';

    return classNames(defaultNavLinkClassName, activeClassName);
  };

  const renderNavigationItems = () => {
    // TODO: for not auth
    // eslint-disable-next-line no-constant-condition
    if (false) {
      return <Button theme="primary">Login</Button>;
    }

    return (
      <>
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>

        <div className={defaultNavLinkClassName} onClick={handleOpenSearchMovieModal}>
          <SearchIcon />

          Search
        </div>
      </>
    );
  };

  return <div className="gl-header-nav-menu">{renderNavigationItems()}</div>;
};

export default NavigationMenu;
