import React, { useState, useMemo, useEffect } from 'react';

const MoviesStateContext = React.createContext({});

// TODO: for handleAddMovie, handleDeleteMovie, handleUpdateMovie
// TODO: also need to add movie to firebase (so show overlay spinner)
// TODO: maybe spinner inside button so he can't again click and show pending process

export const MoviesStateContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isPending, setIsPending] = useState(false);

  /**
   * @param movieImdbID {Number}
   *
   * @return {Number}
   */
  const getMovieIndex = (movieImdbID) => movies.findIndex(({ imdbID }) => movieImdbID === imdbID);

  /**
   * @param movieData {Object}
   */
  const handleAddMovie = (movieData) => {
    setMovies((prevState) => [movieData, ...prevState]);
  };

  /**
   * @param movieImdbID {Number}
   */
  const handleDeleteMovie = (movieImdbID) => {
    const movieIndex = getMovieIndex(movieImdbID);

    setMovies((prevState) => [
      ...prevState.slice(0, movieIndex),
      ...prevState.slice(movieIndex + 1),
    ]);
  };

  /**
   * @param movieImdbID {Number}
   * @param updatedData {Object}
   */
  const handleUpdateMovie = (movieImdbID, updatedData) => {
    const movieIndex = getMovieIndex(movieImdbID);

    const updatedMovie = {
      ...movies[movieIndex],
      ...updatedData,
    };

    setMovies((prevState) => [
      ...prevState.slice(0, movieIndex),
      updatedMovie,
      ...prevState.slice(movieIndex + 1),
    ]);
  };

  const providerValue = useMemo(
    () => ({
      movies,
      handleAddMovie,
      handleDeleteMovie,
      handleUpdateMovie,
    }),
    [movies, handleAddMovie, handleDeleteMovie, handleUpdateMovie],
  );

  // TODO: need to get movies from firebase
  useEffect(() => {
    setMovies([]);
  }, []);

  return (
    <MoviesStateContext.Provider value={providerValue}>{children}</MoviesStateContext.Provider>
  );
};

export default MoviesStateContext;
