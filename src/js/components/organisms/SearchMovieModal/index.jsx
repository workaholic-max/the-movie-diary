import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import LabelInputField from '../../molecules/LabelInputField';
import OverlaySpinner from '../../atoms/OverlaySpinner';
import Button from '../../atoms/Button';

// TODO: add "cancel" btn. Delete cross icon at all
// TODO: make this modal more width and btns should be flex-end (YouTube)
const SearchMovieModal = ({ onSubmit, onClose }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [isSearchingMovie, setIsSearchingMovie] = useState(false);
  const [searchingMovieError, setSearchingMovieError] = useState(null);

  const isSearchDisabled =
    movieTitle.trim().length === 0 || searchingMovieError !== null || isSearchingMovie;

  /**
   * @param event {InputEvent}
   */
  const onChangeMovieTitle = (event) => {
    setMovieTitle(event.target.value);

    setSearchingMovieError(null);
  };

  /**
   * @param event {InputEvent}
   */
  const onChangeMovieYear = (event) => {
    setMovieYear(event.target.value);

    setSearchingMovieError(null);
  };

  /**
   * @param errorMessage {String}
   */
  const handleSearchingMovieError = (errorMessage) => {
    setSearchingMovieError(errorMessage);
  };

  const handleStopSearchingMovie = () => {
    setIsSearchingMovie(false);
  };

  /**
   * @param event {SubmitEvent}
   */
  const onSearch = (event) => {
    event.preventDefault();

    if (!isSearchDisabled) {
      setIsSearchingMovie(true);

      const payload = {
        movieTitle,
      };

      // TODO: need to add validation to not be able to submit while invalid year
      if (movieYear && movieYear.length > 0) {
        payload.movieYear = movieYear;
      }

      onSubmit(payload, handleSearchingMovieError, handleStopSearchingMovie);
    }
  };

  return (
    <Modal
      className="gl-search-movie-modal"
      onClose={onClose}
      enableCloseOnEsc={!isSearchingMovie}
      enableCloseOnOverlayClick={!isSearchingMovie}
      enableCloseBtn={!isSearchingMovie}
    >
      {isSearchingMovie && <OverlaySpinner />}

      <h2>Find the desired movie</h2>

      <form onSubmit={onSearch}>
        <LabelInputField
          labelContent="Movie title"
          type="text"
          id="movie-title"
          placeholder="required"
          value={movieTitle}
          onChange={onChangeMovieTitle}
          enableAnimation
        />

        <LabelInputField
          labelContent="Movie year"
          type="text"
          id="movie-year"
          placeholder="optional"
          value={movieYear}
          onChange={onChangeMovieYear}
          enableAnimation
        />

        <div className="gl-search-movie-modal__footer">
          <Button theme="primary" onClick={onClose}>Cancel</Button>

          <Button theme="primary" type="submit" disabled={isSearchDisabled}>
            Search
          </Button>
        </div>
      </form>

      {searchingMovieError && (
        <div className="gl-search-movie-modal__error">{searchingMovieError}</div>
      )}
    </Modal>
  );
};

SearchMovieModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchMovieModal;
