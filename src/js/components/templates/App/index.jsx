import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from '../../../context/AuthContext';
import { MoviesStateContextProvider } from '../../../context/MoviesStateContext';
import { SearchMovieContextProvider } from '../../../context/SearchMovieContext';
import RoutesElements from './UI/RoutesElements';

const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <MoviesStateContextProvider>
        <SearchMovieContextProvider>
          <RoutesElements />
        </SearchMovieContextProvider>
      </MoviesStateContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;
