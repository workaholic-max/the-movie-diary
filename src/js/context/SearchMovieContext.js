import React, { useState, useMemo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { sendSearchMovieRequestAPI } from '../utils/api/searchMovieIAPI';
import MoviesStateContext from './MoviesStateContext';

const SearchMovieContext = React.createContext({});

export const SearchMovieContextProvider = ({ children }) => {
  const [isSearchMovieModalOpened, setIsSearchMovieModalOpened] = useState(false);
  const [searchedMovieData, setSearchedMovieData] = useState(null);

  const { getMovieDiaryDataByImdbID } = useContext(MoviesStateContext);

  const navigate = useNavigate();

  const handleOpenSearchMovieModal = () => {
    setIsSearchMovieModalOpened(true);
  };

  const handleCloseSearchMovieModal = () => {
    setIsSearchMovieModalOpened(false);
  };

  const handleResetSearchedMovieData = () => {
    setSearchedMovieData(null);
  };

  /**
   * @param payload {Object}
   * @param handleErrorResponse {Function}
   * @param handleStopLoading {Function}
   */
  const handleSearchMovie = (payload, handleErrorResponse, handleStopLoading) => {
    sendSearchMovieRequestAPI(payload)
      .then((movieData) => {
        if (movieData.Response === 'True') {
          setIsSearchMovieModalOpened(false);

          const { imdbID } = movieData;

          const movieDiaryData = getMovieDiaryDataByImdbID(imdbID);

          if (!movieDiaryData) {
            setSearchedMovieData(movieData);
          } else {
            setSearchedMovieData(null);
          }

          navigate(`movie/${imdbID}`, { replace: true });
        } else {
          handleErrorResponse?.(movieData.Error);
        }
      })
      .catch(() => {
        handleErrorResponse?.('Some error occurred.. try later.');
      })
      .finally(() => {
        handleStopLoading?.();
      });
  };

  const providerValue = useMemo(
    () => ({
      searchedMovieData,
      isSearchMovieModalOpened,
      handleSearchMovie,
      handleOpenSearchMovieModal,
      handleCloseSearchMovieModal,
      handleResetSearchedMovieData,
    }),
    [
      searchedMovieData,
      isSearchMovieModalOpened,
      handleSearchMovie,
      handleOpenSearchMovieModal,
      handleCloseSearchMovieModal,
      handleResetSearchedMovieData,
    ],
  );

  return (
    <SearchMovieContext.Provider value={providerValue}>{children}</SearchMovieContext.Provider>
  );
};

export default SearchMovieContext;
