import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import MoviesStateContext from '../../context/MoviesStateContext';
import SearchMovieContext from '../../context/SearchMovieContext';
import Layout from '../../components/templates/Layout';
import ListedMovieActions from '../../components/organisms/ListedMovieActions';
import OverlaySpinner from '../../components/atoms/OverlaySpinner';
import Button from '../../components/atoms/Button';
import MovieDetails from './UI/MovieDetails';
import UnlistedMovieActions from './UI/UnlistedMovieActions';

const MoviePage = () => {
  const { user } = useContext(AuthContext);

  const { getMovieDiaryDataByImdbID } = useContext(MoviesStateContext);

  const { searchedMovieData, handleSearchMovie } = useContext(SearchMovieContext);

  const { imdbID } = useParams();

  const navigate = useNavigate();

  const movieDiaryData = getMovieDiaryDataByImdbID(imdbID);
  const currentMovieData = movieDiaryData || searchedMovieData;

  const isMovieListed = !!movieDiaryData;

  /**
   * @param errorMessage {String}
   */
  const handleSearchingMovieError = (errorMessage) => {
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const renderMovieActions = () => {
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

  const renderGoBackBtn = () => {
    if (isMovieListed) {
      return (
        <div className="gl-movie-page__go-back">
          <Button theme="primary" onClick={handleGoBack}>
            Go back
          </Button>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    if (!currentMovieData && user) {
      handleSearchMovie({ movieImdbID: imdbID }, handleSearchingMovieError);
    }
  }, [user?.uid]);

  if (!currentMovieData && user) {
    return <OverlaySpinner>Loading movie data..</OverlaySpinner>;
  }

  return (
    <Layout>
      <div className="gl-movie-page">
        {currentMovieData && (
          <MovieDetails movieData={currentMovieData}>{renderMovieActions()}</MovieDetails>
        )}

        {renderGoBackBtn()}
      </div>
    </Layout>
  );
};

export default MoviePage;
