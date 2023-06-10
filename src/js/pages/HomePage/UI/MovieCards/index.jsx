import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SwiperSlider from '../../../../components/organisms/SwiperSlider';
import ListedMovieActions from '../../../../components/organisms/ListedMovieActions';
import { SwiperArrowNext, SwiperArrowPrev } from '../../../../components/atoms/SwiperArrows';
import { SLIDER_SETTINGS } from './config';

const MovieCards = ({ title, movieList, filterCallback }) => {
  const filteredMovieList = movieList.filter(filterCallback);

  const swiperArrowPrevRef = useRef(null);
  const swiperArrowNextRef = useRef(null);

  const renderMovieCardsInfo = () => (
    <div className="gl-movie-cards__info">
      <h2 className="gl-movie-cards__title">{title}</h2>

      <div className="gl-movie-cards__swiper-arrows">
        <SwiperArrowPrev ref={swiperArrowPrevRef} />

        <SwiperArrowNext ref={swiperArrowNextRef} />
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

  const renderMovieCards = () => filteredMovieList.map(renderMovieCard);

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

  if (filteredMovieList.length === 0) {
    return null;
  }

  return (
    <div className="gl-movie-cards">
      {renderMovieCardsInfo()}

      {renderMovieCardsSlider()}
    </div>
  );
};

MovieCards.propTypes = {
  title: PropTypes.string.isRequired,
  movieList: PropTypes.array.isRequired,
  filterCallback: PropTypes.func.isRequired,
};

export default MovieCards;
