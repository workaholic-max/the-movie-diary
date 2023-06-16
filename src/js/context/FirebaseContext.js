import React, { useMemo } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBHCbYhgvBdxpYokrLsJf_MBTWwfzQfq4M',
  authDomain: 'the-movie-diary---gl.firebaseapp.com',
  databaseURL: 'https://the-movie-diary---gl-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'the-movie-diary---gl',
  storageBucket: 'the-movie-diary---gl.appspot.com',
  messagingSenderId: '423878750662',
  appId: '1:423878750662:web:82926d8e44299681db82c7',
  measurementId: 'G-NR3T2G5PCN',
};

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

const FirebaseContext = React.createContext({});

export const FirebaseContextProvider = ({ children }) => {
  const providerValue = useMemo(
    () => ({
    }),
    [],
  );

  return (
    <FirebaseContext.Provider value={providerValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
