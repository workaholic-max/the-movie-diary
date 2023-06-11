import React, { useContext } from 'react';

import MoviesStateContext from '../../context/MoviesStateContext';
import MovieCards from './UI/MovieCards';

// It seems that there are no movies in your diary that match status ${status}.
// but you can activate status ${status} below in section no status movies (if allowed to show)

const HomePage = () => {
  const { movieDiary } = useContext(MoviesStateContext);

  const isMovieDiaryEmpty = movieDiary.length === 0;

  const favoriteMovieList = movieDiary.filter(({ statuses }) => statuses.favorite === 1);
  const watchedMovieList = movieDiary.filter(({ statuses }) => statuses.watched === 1);
  const wishlistMovieList = movieDiary.filter(({ statuses }) => statuses.wishlist === 1);

  const noStatusMovieList = movieDiary.filter(
    ({ statuses }) => statuses.favorite === 0 && statuses.watched === 0 && statuses.wishlist === 0,
  );

  const renderEmptyMovieDiaryContent = () => (
    <div className="gl-home-page__empty-content">
      <h2>WELCOME TO THE MOVIE DIARY</h2>

      <p>I see you are either new here or have decided to delete everything from your Diary</p>

      <p>In any case, it's never too late to start, so go ahead and create your own Diary</p>
    </div>
  );

  // TODO: add search
  // TODO: also better filter here and pass movieList already filtered
  // TODO: if filtered movieList is empty don't show movieCards

  // TODO: create config var which will determine when and what to render
  // TODO: we will have search / filterSelect (all, fav, ...)

  //  TODO: / sortSelect (new first added/old first added) + by alphabet
  // TODO: examples:  Show first added -> (toggle btn) (active by default)
  // TODO: probably just search / icon of settings (or filters + toggle btn)
  // TODO: filters be like: (toggle btn) -> show favorites, and other
  // TODO: and we show "show all"

  // tODO: for sort we show 3 variants: disabled, first new, first old (check scrn + mob)
  // TODO: for sort we show 3 variants: disabled, A-Z, Z-A

  // TODO: and split them like in a modal and: filter rules / Sort rules

  // TODO: if no item and filter is not "all" or "no status"
  // TODO: return array so u can easy give configuration what to render
  // TODO: create context for this (to have configuration after changing route)

  return (
    <div className="gl-home-page">
      <div className="gl-container">
        {isMovieDiaryEmpty && renderEmptyMovieDiaryContent()}

        <MovieCards title="Favorite" movieList={favoriteMovieList} />

        <MovieCards title="Watched" movieList={watchedMovieList} />

        <MovieCards title="Next to watch" movieList={wishlistMovieList} />

        {noStatusMovieList.length > 0 && (
          <MovieCards title="No status" movieList={noStatusMovieList} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
