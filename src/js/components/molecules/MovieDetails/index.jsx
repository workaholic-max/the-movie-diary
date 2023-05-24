import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MovieTags from '../MovieTags';
import { MOVIE_INFO_KEYS } from './config';

// TODO: move & split
const MovieDetails = ({
  movieData, isEditMode, showFullMovieDetails, children,
}) => {
  const { Poster, Title, tags } = movieData;

  const renderMoviePoster = () => <img src={Poster} alt={`${Title} poster`} />;

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

  return (
    <div
      className={classNames('movie-details', {
        'movie-details--full': showFullMovieDetails,
      })}
    >
      <div className="movie-details__poster">{renderMoviePoster()}</div>

      {showFullMovieDetails && (
        <div className="movie-details__info">
          {renderMovieInfo()}

          {children}
        </div>
      )}

      {tags && isEditMode && <MovieTags tags={tags} />}
    </div>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool,
  showFullMovieDetails: PropTypes.bool,
};

MovieDetails.defaultProps = {
  isEditMode: false,
  showFullMovieDetails: false,
};

export default MovieDetails;
