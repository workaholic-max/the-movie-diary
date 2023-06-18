import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContextProvider } from '../../../context/AuthContext';
import { MoviesStateContextProvider } from '../../../context/MoviesStateContext';
import { SearchMovieContextProvider } from '../../../context/SearchMovieContext';
import HomePage from '../../../pages/HomePage';
import MoviePage from '../../../pages/MoviePage';
import AccountPage from '../../../pages/AccountPage';

const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <MoviesStateContextProvider>
        <SearchMovieContextProvider>
          <Routes>
            <Route path="/account" element={<AccountPage />} />

            <Route path="/:ownerID/movie/:imdbID" element={<MoviePage />} />

            <Route path="/:ownerID" element={<HomePage />} />

            <Route path="/movie/:imdbID" element={<MoviePage />} />

            <Route path="/" element={<HomePage />} />

            <Route element={<Navigate to="/" replace />} />
          </Routes>
        </SearchMovieContextProvider>
      </MoviesStateContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;
