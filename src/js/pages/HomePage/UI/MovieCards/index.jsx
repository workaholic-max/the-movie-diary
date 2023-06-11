import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SwiperSlider from '../../../../components/organisms/SwiperSlider';
import ListedMovieActions from '../../../../components/organisms/ListedMovieActions';
import { SwiperArrowNext, SwiperArrowPrev } from '../../../../components/atoms/SwiperArrows';
import { SLIDER_SETTINGS } from './config';

const MovieCards = ({ title, movieList }) => {
  const swiperArrowPrevRef = useRef(null);
  const swiperArrowNextRef = useRef(null);

  const isMovieListEmpty = movieList.length === 0;

  const renderMovieCardsInfo = () => (
    <div className="gl-movie-cards__info">
      <h2 className="gl-movie-cards__title">{title}</h2>

      <div className="gl-movie-cards__swiper-arrows">
        <SwiperArrowPrev ref={swiperArrowPrevRef} disabled={isMovieListEmpty} />

        <SwiperArrowNext ref={swiperArrowNextRef} disabled={isMovieListEmpty} />
      </div>
    </div>
  );

  /**
   * @param imdbID {String}
   * @param Poster {String}
   * @param Title {String}
   * @param statuses {Object}
   */
  const renderMovieCard = ({
    imdbID, Poster, Title, statuses,
  }) => {
    const isPosterInvalid = Poster.length === 0 || Poster === 'N/A';

    return (
      <div key={`${title}-${imdbID}`} className="gl-movie-cards__card">
        <Link
          key={`${title}-${imdbID}`}
          to={`/movie/${imdbID}`}
          className={classNames('gl-movie-cards__card-poster', {
            'gl-movie-cards__card-poster--invalid': isPosterInvalid,
          })}
        >
          <img src={Poster} alt={`${Title} poster`} title={`Open '${Title}' details`} />
        </Link>

        <ListedMovieActions movieImdbID={imdbID} movieStatuses={statuses} />
      </div>
    );
  };

  const renderMovieCards = () => movieList.map(renderMovieCard);

  const renderMovieCardsSlider = () => (
    <SwiperSlider
      className="gl-movie-cards__slider"
      sliderProps={{
        ...SLIDER_SETTINGS,
        navigation: {
          prevEl: swiperArrowPrevRef.current,
          nextEl: swiperArrowNextRef.current,
        },
        onBeforeInit: (swiper) => {
          swiper.params.navigation.prevEl = swiperArrowPrevRef.current;
          swiper.params.navigation.nextEl = swiperArrowNextRef.current;
        },
      }}
    >
      {renderMovieCards()}
    </SwiperSlider>
  );

  const renderMovieCardsEmpty = () => (
    <span>
      There are no movies in your diary that match status {title.toLowerCase()}.
    </span>
  );

  return (
    <div
      className={classNames('gl-movie-cards', {
        'gl-movie-cards--empty': isMovieListEmpty,
      })}
    >
      {renderMovieCardsInfo()}

      {isMovieListEmpty ? renderMovieCardsEmpty() : renderMovieCardsSlider()}
    </div>
  );
};

MovieCards.propTypes = {
  title: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
};

export default MovieCards;
