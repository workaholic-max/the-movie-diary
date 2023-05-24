import React, { useContext } from 'react';

import MoviesStateContext from '../../context/MoviesStateContext';
import SearchMovieContext from '../../context/SearchMovieContext';
import MovieDetails from '../../components/molecules/MovieDetails';
import SortFilterPanel from '../../components/molecules/SortFilterPanel';

// <h1>It seems that there are no movies in your diary that match the criteria you've chosen.</h1>

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

        <div className="hidden-flex-block" />
      </>
    );
  };

  return <div className="home-page">{renderContent()}</div>;
};

export default HomePage;
