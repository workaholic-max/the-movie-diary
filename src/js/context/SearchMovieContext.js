import React, { useState, useMemo, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { sendSearchMovieRequestAPI } from '../utils/api/searchMovieIAPI';
import MoviesStateContext from './MoviesStateContext';
import SearchMovieModal from '../components/organisms/SearchMovieModal';

const SearchMovieContext = React.createContext({});

export const SearchMovieContextProvider = ({ children }) => {
  const [isSearchMovieModalOpened, setIsSearchMovieModalOpened] = useState(false);
  const [searchedMovieData, setSearchedMovieData] = useState(null);

  const { getMovieDiaryDataByImdbID } = useContext(MoviesStateContext);

  const navigate = useNavigate();

  const handleOpenSearchMovieModal = () => {
    setIsSearchMovieModalOpened(true);

    // TODO: remove replace after add feature to load movie by imdbID
    navigate('/', { replace: true });
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
      handleOpenSearchMovieModal,
      handleResetSearchedMovieData,
    }),
    [searchedMovieData, handleOpenSearchMovieModal, handleResetSearchedMovieData],
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
