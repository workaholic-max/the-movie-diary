import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { MOVIE_INFO_KEYS } from './config';

const MovieDetails = ({ movieData, showFullMovieDetails, children }) => {
  const renderMoviePoster = () => <img src={movieData.Poster} alt={`${movieData.Title} poster`} />;

  /**
   * @param apiKey {String}
   * @param title {String}
   */
  const renderMovieInfoItem = ({ apiKey, title }) => (
    <div className="movie-details__info-item" key={apiKey}>
      {title && <b>{title}:</b>}

      <span>
        {movieData[apiKey] || 'N/A'}

        {title ? '.' : ''}
      </span>
    </div>
  );

  const renderMovieInfo = () => MOVIE_INFO_KEYS.map(renderMovieInfoItem);

  const renderMovieDetailsInfo = () => {
    if (showFullMovieDetails) {
      return renderMovieInfo();
    }

    return renderMovieInfoItem({ apiKey: MOVIE_INFO_KEYS[0].apiKey, title: '' });
  };

  return (
    <div
      className={classNames('movie-details', {
        'movie-details--full': showFullMovieDetails,
      })}
    >
      <div className="movie-details__poster">{renderMoviePoster()}</div>

      <div className="movie-details__info">
        {renderMovieDetailsInfo()}

        {children}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
  showFullMovieDetails: PropTypes.bool,
};

MovieDetails.defaultProps = {
  showFullMovieDetails: false,
};

export default MovieDetails;
