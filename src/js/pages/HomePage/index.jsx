import React, { useContext } from 'react';

import MoviesStateContext from '../../context/MoviesStateContext';
import SearchMovieContext from '../../context/SearchMovieContext';

// <h1>It seems that there are no movies in your diary that match the criteria you've chosen.</h1>

const HomePage = () => {
  const { movieDiary } = useContext(MoviesStateContext);

  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  const renderMoviesDetails = () =>
    movieDiary.map((movieData) => <h2 key={movieData.imdbID}>{movieData.Title}</h2>);

  const renderContent = () => {
    if (movieDiary.length === 0) {
      return (
        <div className="gl-get-started-content">
          To get started, you can <span onClick={handleOpenSearchMovieModal}>search</span> for your
          favorite movies and add them to your diary.
        </div>
      );
    }

    return (
      <>
        {renderMoviesDetails()}

        <div className="hidden-flex-block" />
      </>
    );
  };

  return <div className="home-page">{renderContent()}</div>;
};

export default HomePage;
