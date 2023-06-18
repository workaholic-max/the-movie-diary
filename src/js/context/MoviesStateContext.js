import React, { useState, useMemo, useEffect, useContext } from 'react';
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';

import firebase from '../firebase';
import { COLLECTION_KEYS } from '../enums/firebaseEnums';
import AuthContext from './AuthContext';
import OverlaySpinner from '../components/atoms/OverlaySpinner';

const MoviesStateContext = React.createContext({});

export const MoviesStateContextProvider = ({ children }) => {
  const [movieDiary, setMovieDiary] = useState(null);

  const { user } = useContext(AuthContext);

  const firestore = useMemo(() => getFirestore(firebase), []);

  /**
   * @param movieImdbID {String}
   *
   * @return {Number}
   */
  const getMovieIndex = (movieImdbID) =>
    movieDiary.findIndex(({ imdbID }) => movieImdbID === imdbID);

  /**
   * @param movieImdbID {String}
   *
   * @return {Object}
   */
  const getMovieDiaryDataByImdbID = (movieImdbID) =>
    movieDiary.find(({ imdbID }) => movieImdbID === imdbID);

  const fetchMovieDiary = () => {
    const docsQuery = collection(
      firestore,
      COLLECTION_KEYS.USERS,
      user.uid,
      COLLECTION_KEYS.MOVIE_DIARY,
    );

    getDocs(docsQuery).then((querySnapshot) => {
      const movieDiaryData = querySnapshot.docs.map((docData) => ({ ...docData.data() }));

      setMovieDiary(movieDiaryData);
    });
  };

  /**
   * @param movieData {Object}
   */
  const handleAddMovie = (movieData) => {
    const docRef = doc(
      firestore,
      COLLECTION_KEYS.USERS,
      user.uid,
      COLLECTION_KEYS.MOVIE_DIARY,
      movieData.imdbID,
    );

    setDoc(docRef, movieData);

    setMovieDiary((prevState) => [movieData, ...prevState]);
  };

  /**
   * @param movieImdbID {String}
   */
  const handleDeleteMovie = (movieImdbID) => {
    const docRef = doc(
      firestore,
      COLLECTION_KEYS.USERS,
      user.uid,
      COLLECTION_KEYS.MOVIE_DIARY,
      movieImdbID,
    );

    deleteDoc(docRef);

    const movieIndex = getMovieIndex(movieImdbID);

    setMovieDiary((prevState) => [
      ...prevState.slice(0, movieIndex),
      ...prevState.slice(movieIndex + 1),
    ]);
  };

  /**
   * @param movieImdbID {String}
   * @param updatedData {Object}
   */
  const handleUpdateMovie = (movieImdbID, updatedData) => {
    const movieIndex = getMovieIndex(movieImdbID);

    setMovieDiary((prevState) => {
      const updatedMovie = {
        ...prevState[movieIndex],
        ...updatedData,
      };

      const docRef = doc(
        firestore,
        COLLECTION_KEYS.USERS,
        user.uid,
        COLLECTION_KEYS.MOVIE_DIARY,
        movieImdbID,
      );

      setDoc(docRef, updatedMovie);

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

  useEffect(() => {
    fetchMovieDiary();
  }, []);

  return (
    <MoviesStateContext.Provider value={providerValue}>
      {movieDiary !== null ? children : <OverlaySpinner>Loading movie diary data..</OverlaySpinner>}
    </MoviesStateContext.Provider>
  );
};

export default MoviesStateContext;
