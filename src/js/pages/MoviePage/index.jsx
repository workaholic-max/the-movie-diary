import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import MoviesStateContext from '../../context/MoviesStateContext';
import SearchMovieContext from '../../context/SearchMovieContext';
import ListedMovieActions from '../../components/organisms/ListedMovieActions';
import MovieDetails from './UI/MovieDetails';
import UnlistedMovieActions from './UI/UnlistedMovieActions';

const MoviePage = () => {
  const { getMovieDiaryDataByImdbID } = useContext(MoviesStateContext);

  const { searchedMovieData } = useContext(SearchMovieContext);

  const { imdbID } = useParams();

  const movieDiaryData = getMovieDiaryDataByImdbID(imdbID);
  const currentMovieData = movieDiaryData || searchedMovieData;

  const renderMovieActions = () => {
    const isMovieListed = !!movieDiaryData;

    if (isMovieListed) {
      return (
        <ListedMovieActions
          movieImdbID={currentMovieData.imdbID}
          movieStatuses={currentMovieData.statuses}
          enableActionTitle
        />
      );
    }

    return <UnlistedMovieActions />;
  };

  // TODO: add feature to load movie by imdbID
  if (!currentMovieData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="gl-movie-page">
      <MovieDetails movieData={currentMovieData}>{renderMovieActions()}</MovieDetails>
    </div>
  );
};

export default MoviePage;
