import React, { useContext } from 'react';

import { DEFAULT_MOVIE_STATUSES } from '../../../../enums/movieEnums';
import MoviesStateContext from '../../../../context/MoviesStateContext';
import SearchMovieContext from '../../../../context/SearchMovieContext';
import Button from '../../../../components/atoms/Button';

const UnlistedMovieActions = () => {
  const { handleAddMovie } = useContext(MoviesStateContext);

  const {
    searchedMovieData,
    handleOpenSearchMovieModal,
    handleResetSearchedMovieData,
  } = useContext(SearchMovieContext);

  const handleAddToDiary = () => {
    handleAddMovie({ ...searchedMovieData, statuses: DEFAULT_MOVIE_STATUSES });

    handleResetSearchedMovieData();
  };

  return (
    <div className="gl-unlisted-movie-actions">
      <Button theme="primary" onClick={handleOpenSearchMovieModal}>
        Keep searching
      </Button>

      <Button theme="primary" onClick={handleAddToDiary}>
        Add to diary
      </Button>
    </div>
  );
};

export default UnlistedMovieActions;
