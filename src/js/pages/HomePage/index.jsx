import React, { useContext } from 'react';

import MoviesStateContext from '../../context/MoviesStateContext';
import EmptyDiaryContent from './UI/EmptyDiaryContent';
import MovieCards from './UI/MovieCards';

// It seems that there are no movies in your diary that match status ${status}.
// but you can activate status ${status} below in section no status movies (if allowed to show)

const HomePage = () => {
  const { movieDiary } = useContext(MoviesStateContext);

  // TODO: add search
  const renderContent = () => {
    if (movieDiary.length === 0) {
      return <EmptyDiaryContent />;
    }

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
      <>
        <MovieCards
          title="Favorite"
          movieList={movieDiary}
          filterCallback={({ statuses }) => statuses.favorite === 1}
        />

        <MovieCards
          title="Watched"
          movieList={movieDiary}
          filterCallback={({ statuses }) => statuses.watched === 1}
        />

        <MovieCards
          title="No status marked"
          movieList={movieDiary}
          filterCallback={({ statuses }) => statuses.favorite === 0 && statuses.watched === 0}
        />
      </>
    );
  };

  return (
    <div className="gl-home-page">
      <div className="gl-container">{renderContent()}</div>
    </div>
  );
};

export default HomePage;
