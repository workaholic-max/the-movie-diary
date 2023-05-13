import React, { useContext } from 'react';

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
    handleAddMovie(searchedMovieData);

    if (isKeepSearchingAfterAdding) {
      handleOpenSearchMovieModal();
    } else {
      handleCloseSearchedMovieDataModal();
    }
  };

  return (
    <div className="searched-movie-view">
      <div className="searched-movie-view__wrapper">
        <MovieDetails movieData={searchedMovieData} showFullMovieDetails>
          <div className="searched-movie-view__actions">
            <CheckboxField
              id="keep-searching-after-adding-checkbox"
              labelContent="Keep searching after adding"
              checked={isKeepSearchingAfterAdding}
              onChange={onChangeKeepSearchingAfterAdding}
            />

            <div className="searched-movie-view__actions-btns">
              <Button className="btn-warning" onClick={handleOpenSearchMovieModal}>
                Keep searching
              </Button>

              <Button className="btn-success" onClick={handleAddToDiary}>
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
