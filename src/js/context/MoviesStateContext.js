import React, { useState, useMemo, useEffect } from 'react';

const MoviesStateContext = React.createContext({});

// TODO: also need to add movie to firebase (so show overlay spinner)
// TODO: maybe spinner inside button so he can't again click and show pending process

export const MoviesStateContextProvider = ({ children }) => {
  const [movieDiary, setMovieDiary] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isPending, setIsPending] = useState(false);

  /**
   * @param movieImdbID {Number}
   *
   * @return {Number}
   */
  const getMovieIndex = (movieImdbID) =>
    movieDiary.findIndex(({ imdbID }) => movieImdbID === imdbID);

  const getMovieDiaryDataByImdbID = (movieImdbID) =>
    movieDiary.find(({ imdbID }) => movieImdbID === imdbID);

  /**
   * @param movieData {Object}
   */
  const handleAddMovie = (movieData) => {
    setMovieDiary((prevState) => [movieData, ...prevState]);
  };

  /**
   * @param movieImdbID {Number}
   */
  const handleDeleteMovie = (movieImdbID) => {
    const movieIndex = getMovieIndex(movieImdbID);

    setMovieDiary((prevState) => [
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

    setMovieDiary((prevState) => {
      const updatedMovie = {
        ...prevState[movieIndex],
        ...updatedData,
      };

      return [...prevState.slice(0, movieIndex), updatedMovie, ...prevState.slice(movieIndex + 1)];
    });
  };

  const providerValue = useMemo(
    () => ({
      movieDiary,
      getMovieDiaryDataByImdbID,
      handleAddMovie,
      handleDeleteMovie,
      handleUpdateMovie,
    }),
    [movieDiary, getMovieDiaryDataByImdbID, handleAddMovie, handleDeleteMovie, handleUpdateMovie],
  );

  // TODO: need to get movies from firebase
  useEffect(() => {
    setMovieDiary([]);
  }, []);

  return (
    <MoviesStateContext.Provider value={providerValue}>{children}</MoviesStateContext.Provider>
  );
};

export default MoviesStateContext;
