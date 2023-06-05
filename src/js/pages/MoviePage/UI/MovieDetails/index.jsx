import React from 'react';
import PropTypes from 'prop-types';

import { MOVIE_DETAILS_KEYS } from '../../config';

const MovieDetails = ({ movieData, children }) => {
  const renderMoviePoster = () => <img src={movieData.Poster} alt={`${movieData.Title} poster`} />;

  /**
   * @param apiKey {String}
   * @param title {String}
   */
  const renderMovieDetailsListItem = ({ apiKey, title }) => (
    <div className="movie-details__list-item" key={apiKey}>
      {title && <b>{title}:</b>}

      <span>
        {movieData[apiKey] || 'N/A'}

        {title ? '.' : ''}
      </span>
    </div>
  );

  const renderMovieDetailsListItems = () => MOVIE_DETAILS_KEYS.map(renderMovieDetailsListItem);

  return (
    <div className="movie-details">
      <div className="movie-details__poster">{renderMoviePoster()}</div>

      <div className="movie-details__list">
        <div className="movie-details__list-items">{renderMovieDetailsListItems()}</div>

        {children}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default MovieDetails;
