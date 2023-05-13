import React, {
  useState, useCallback, useRef, useContext,
} from 'react';

import classNames from 'classnames';
import SearchMovieContext from '../../../../../context/SearchMovieContext';
import useOnClickOutside from '../../../../../hooks/useOnClickOutside';
import Button from '../../../../atoms/Button';

// TODO: not all actions work yet
const HeaderActions = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const rootRef = useRef(null);

  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  const toggleOpenDropdown = () => {
    setIsDropdownOpened((prevState) => !prevState);
  };

  const handleCloseDropdown = useCallback(() => {
    if (isDropdownOpened) {
      setIsDropdownOpened(false);
    }
  }, [isDropdownOpened]);

  const onOpenFindMovieModal = () => {
    handleOpenSearchMovieModal();

    handleCloseDropdown();
  };

  const renderActions = () => {
    // TODO: for not auth
    // eslint-disable-next-line no-constant-condition
    if (false) {
      return <Button className="btn-primary">Login</Button>;
    }

    const renderDropdown = () => {
      if (!isDropdownOpened) {
        return null;
      }

      return (
        <div className="header__actions-dropdown header-actions-dropdown">
          <div className="header-actions-dropdown__option" onClick={onOpenFindMovieModal}>
            Find a movie
          </div>

          <div className="header-actions-dropdown__option">Get 'share link'</div>

          <div className="header-actions-dropdown__option">Logout</div>
        </div>
      );
    };

    return (
      <>
        <Button
          className={classNames('btn-primary header__actions-hamburger', {
            opened: isDropdownOpened,
          })}
          onClick={toggleOpenDropdown}
        >
          <span />

          <span />

          <span />
        </Button>

        {renderDropdown()}
      </>
    );
  };

  useOnClickOutside(rootRef, handleCloseDropdown);

  return (
    <div className="header__actions" ref={rootRef}>
      {renderActions()}
    </div>
  );
};

export default HeaderActions;