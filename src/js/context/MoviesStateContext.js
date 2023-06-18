import React, { useState, useMemo, useEffect, useContext } from 'react';
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import firebase from '../firebase';
import { COLLECTION_KEYS } from '../enums/firebaseEnums';
import AuthContext from './AuthContext';
import OverlaySpinner from '../components/atoms/OverlaySpinner';

const MoviesStateContext = React.createContext({});

export const MoviesStateContextProvider = ({ children }) => {
  const [movieDiary, setMovieDiary] = useState([]);
  const [hasMovieDiaryLoaded, setHasMovieDiaryLoaded] = useState(false);

  const { user, ownerUid, isAuthUserOwner } = useContext(AuthContext);

  const navigate = useNavigate();

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
    setHasMovieDiaryLoaded(false);

    const docsQuery = collection(
      firestore,
      COLLECTION_KEYS.USERS,
      ownerUid,
      COLLECTION_KEYS.MOVIE_DIARY,
    );

    getDocs(docsQuery).then((querySnapshot) => {
      const movieDiaryData = querySnapshot.docs.map((docData) => ({ ...docData.data() }));

      setHasMovieDiaryLoaded(true);

      setMovieDiary(movieDiaryData);
    });
  };

  /**
   * @param movieData {Object}
   */
  const handleAddMovie = (movieData) => {
    if (isAuthUserOwner) {
      const docRef = doc(
        firestore,
        COLLECTION_KEYS.USERS,
        user.uid,
        COLLECTION_KEYS.MOVIE_DIARY,
        movieData.imdbID,
      );

      setDoc(docRef, movieData);

      setMovieDiary((prevState) => [movieData, ...prevState]);
    }
  };

  /**
   * @param movieImdbID {String}
   */
  const handleDeleteMovie = (movieImdbID) => {
    if (isAuthUserOwner) {
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

      navigate('/');
    }
  };

  /**
   * @param movieImdbID {String}
   * @param updatedData {Object}
   */
  const handleUpdateMovie = (movieImdbID, updatedData) => {
    if (isAuthUserOwner) {
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

        return [
          ...prevState.slice(0, movieIndex),
          updatedMovie,
          ...prevState.slice(movieIndex + 1),
        ];
      });
    }
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
    if (ownerUid) {
      fetchMovieDiary();
    }
  }, [ownerUid]);

  return (
    <MoviesStateContext.Provider value={providerValue}>
      {!ownerUid || hasMovieDiaryLoaded ? (
        children
      ) : (
        <OverlaySpinner>Loading movie diary..</OverlaySpinner>
      )}
    </MoviesStateContext.Provider>
  );
};

export default MoviesStateContext;
