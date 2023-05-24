import React, { useContext } from 'react';

import MoviesStateContext from '../../context/MoviesStateContext';
import SearchMovieContext from '../../context/SearchMovieContext';
import MovieDetails from '../../components/molecules/MovieDetails';
import SortFilterPanel from '../../components/molecules/SortFilterPanel';

const HomePage = () => {
  const { movies } = useContext(MoviesStateContext);

  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  const renderMoviesDetails = () =>
    movies.map((movieData) => <MovieDetails key={movieData.imdbID} movieData={movieData} />);

  const renderContent = () => {
    if (movies.length === 0) {
      return (
        <div className="get-started-content">
          To get started, you can <span onClick={handleOpenSearchMovieModal}>search</span> for your
          favorite movies and add them to your diary.
        </div>
      );
    }

    return (
      <>
        {false && <SortFilterPanel />}

        {renderMoviesDetails()}
      </>
    );
  };

  return <div className="home-page">{renderContent()}</div>;
};

export default HomePage;
