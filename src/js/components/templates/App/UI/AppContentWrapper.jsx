import React, { useContext } from 'react';

import MoviesStateContext from '../../../../context/MoviesStateContext';
import SearchMovieContext from '../../../../context/SearchMovieContext';
import SearchedMovieView from '../../../organisms/SearchedMovieView';
import MovieDetails from '../../../molecules/MovieDetails';

const AppContentWrapper = ({ children }) => {
  const { movies } = useContext(MoviesStateContext);

  const { searchedMovieData } = useContext(SearchMovieContext);

  if (searchedMovieData) {
    return <SearchedMovieView />;
  }

  if (false) {
    return children;
  }

  // TODO: TEMPORARY (create page, enable routing)
  // TODO: consider to add btn "filters" on main page which triggers modal with a lot of filters
  // TODO: new idea for filter (show (or extent) movie details)
  return (
    <div className="app-content__wrapper">
      {children}

      {movies.map((movieData) => (
        <MovieDetails key={movieData.Title} movieData={movieData} />
      ))}
    </div>
  );
};

export default AppContentWrapper;
