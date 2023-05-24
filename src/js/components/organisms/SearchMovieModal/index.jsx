import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import OverlaySpinner from '../../molecules/OverlaySpinner';
import LabelInputField from '../../molecules/LabelInputField';
import Button from '../../atoms/Button';

const SearchMovieModal = ({ onSubmit, onClose }) => {
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [isSearchingMovie, setIsSearchingMovie] = useState(false);
  const [searchingMovieError, setSearchingMovieError] = useState(null);

  const isSearchDisabled =
    movieName.trim().length === 0 || searchingMovieError !== null || isSearchingMovie;

  /**
   * @param event {InputEvent}
   */
  const onChangeMovieName = (event) => {
    setMovieName(event.target.value);

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
        movieName,
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
          labelContent="Movie name"
          type="text"
          id="movie-name"
          placeholder="required"
          value={movieName}
          onChange={onChangeMovieName}
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

        <Button theme="primary" type="submit" disabled={isSearchDisabled}>
          Search
        </Button>
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
