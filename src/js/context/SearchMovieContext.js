import React, { useState, useMemo } from 'react';

import { sendSearchMovieRequestAPI } from '../utils/api/searchMovieIAPI';
import SearchMovieModal from '../components/organisms/SearchMovieModal';

const SearchMovieContext = React.createContext({});

export const SearchMovieContextProvider = ({ children }) => {
  const [isSearchMovieModalOpened, setIsSearchMovieModalOpened] = useState(false);
  const [searchedMovieData, setSearchedMovieData] = useState(null);
  const [isKeepSearchingAfterAdding, setIsKeepSearchingAfterAdding] = useState(false);

  const handleOpenSearchMovieModal = () => {
    setIsSearchMovieModalOpened(true);
    setSearchedMovieData(null);
  };

  const handleCloseSearchMovieModal = () => {
    setIsSearchMovieModalOpened(false);
  };

  const handleCloseSearchedMovieDataModal = () => {
    setSearchedMovieData(null);
  };

  const handleSearchMovie = (payload, handleErrorResponse, handleStopLoading) => {
    sendSearchMovieRequestAPI(payload)
      .then((movieData) => {
        if (movieData.Response === 'True') {
          setIsSearchMovieModalOpened(false);

          // TODO: check if we already added searched movie we redirect
          //  to route with movie (by imdbID)
          setSearchedMovieData(movieData);
        } else {
          handleErrorResponse(movieData.Error);
        }
      })
      .catch(() => {
        handleErrorResponse('Some error occurred.. try later.');
      })
      .finally(() => {
        handleStopLoading(false);
      });
  };

  const providerValue = useMemo(
    () => ({
      searchedMovieData,
      isKeepSearchingAfterAdding,
      setIsKeepSearchingAfterAdding,
      handleOpenSearchMovieModal,
      handleCloseSearchedMovieDataModal,
    }),
    [
      searchedMovieData,
      isKeepSearchingAfterAdding,
      setIsKeepSearchingAfterAdding,
      handleOpenSearchMovieModal,
      handleCloseSearchedMovieDataModal,
    ],
  );

  return (
    <SearchMovieContext.Provider value={providerValue}>
      {children}

      {isSearchMovieModalOpened && (
        <SearchMovieModal onSubmit={handleSearchMovie} onClose={handleCloseSearchMovieModal} />
      )}
    </SearchMovieContext.Provider>
  );
};

export default SearchMovieContext;
