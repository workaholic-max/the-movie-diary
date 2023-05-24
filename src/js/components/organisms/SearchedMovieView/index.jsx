import React, { useContext } from 'react';

import { DEFAULT_MOVIE_TAGS } from '../../../enums/MovieEnums';
import MoviesStateContext from '../../../context/MoviesStateContext';
import SearchMovieContext from '../../../context/SearchMovieContext';
import MovieDetails from '../../molecules/MovieDetails';
import CheckboxField from '../../molecules/CheckboxField';
import Button from '../../atoms/Button';

const SearchedMovieView = () => {
  const { handleAddMovie } = useContext(MoviesStateContext);

  const {
    searchedMovieData,
    isKeepSearchingAfterAdding,
    setIsKeepSearchingAfterAdding,
    handleOpenSearchMovieModal,
    handleCloseSearchedMovieDataModal,
  } = useContext(SearchMovieContext);

  /**
   * @param event {InputEvent}
   */
  const onChangeKeepSearchingAfterAdding = (event) => {
    setIsKeepSearchingAfterAdding(event.target.checked);
  };

  const handleAddToDiary = () => {
    handleAddMovie({ ...searchedMovieData, tags: DEFAULT_MOVIE_TAGS });

    if (isKeepSearchingAfterAdding) {
      handleOpenSearchMovieModal();
    } else {
      handleCloseSearchedMovieDataModal();
    }
  };

  return (
    <div className="gl-searched-movie-view">
      <div className="gl-searched-movie-view__wrapper">
        <MovieDetails movieData={searchedMovieData} showFullMovieDetails>
          <div className="gl-searched-movie-view__footer gl-searched-movie-view-footer">
            <CheckboxField
              id="keep-searching-after-adding-checkbox"
              labelContent="Keep searching after adding"
              checked={isKeepSearchingAfterAdding}
              onChange={onChangeKeepSearchingAfterAdding}
            />

            <div className="gl-searched-movie-view__actions">
              <Button theme="warning" onClick={handleOpenSearchMovieModal}>
                Keep searching
              </Button>

              <Button theme="success" onClick={handleAddToDiary}>
                Add to diary
              </Button>
            </div>
          </div>
        </MovieDetails>
      </div>
    </div>
  );
};

export default SearchedMovieView;
