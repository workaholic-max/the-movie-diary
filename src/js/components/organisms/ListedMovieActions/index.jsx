import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MoviesStateContext from '../../../context/MoviesStateContext';
import Button from '../../atoms/Button';
import DeleteIcon from '../../atoms/SvgIcons/DeleteIcon';
import { STATUSES_DATA } from './config';

const ListedMovieActions = ({ movieImdbID, movieStatuses, enableActionTitle }) => {
  const { handleUpdateMovie, handleDeleteMovie } = useContext(MoviesStateContext);

  /**
   * @param event {Event}
   * @param statusKey {String}
   */
  const onToggleStatus = (event, statusKey) => {
    event.stopPropagation();

    const prevStatus = movieStatuses[statusKey];

    const updatedStatuses = {
      ...movieStatuses,
      [statusKey]: prevStatus === 1 ? 0 : 1,
    };

    handleUpdateMovie(movieImdbID, { statuses: updatedStatuses });
  };

  /**
   * @param event {Event}
   */
  const onDeleteMovie = (event) => {
    event.stopPropagation();

    handleDeleteMovie(movieImdbID);
  };

  /**
   * @param title {String}
   */
  const renderActionTitle = (title) => (
    <div className="gl-listed-movie-actions__title">{title}</div>
  );

  const renderStatuses = () =>
    STATUSES_DATA.map(({ statusKey, IconComponent, titles }) => {
      const isStatusActive = movieStatuses[statusKey] === 1;
      const btnTheme = isStatusActive ? 'success' : 'primary';
      const title = isStatusActive ? titles.active : titles.default;

      return (
        <Button
          key={statusKey}
          theme={btnTheme}
          onClick={(event) => onToggleStatus(event, statusKey)}
          enableRounded
        >
          <IconComponent />

          {enableActionTitle && renderActionTitle(title)}
        </Button>
      );
    });

  return (
    <div className="gl-listed-movie-actions">
      <Button
        theme="warning"
        title={enableActionTitle ? 'Delete movie' : ''}
        onClick={onDeleteMovie}
        enableRounded
      >
        <DeleteIcon />
      </Button>

      {renderStatuses()}
    </div>
  );
};

ListedMovieActions.propTypes = {
  movieImdbID: PropTypes.string.isRequired,
  movieStatuses: PropTypes.object.isRequired,
  enableActionTitle: PropTypes.bool,
};

ListedMovieActions.defaultProps = {
  enableActionTitle: false,
};

export default ListedMovieActions;
