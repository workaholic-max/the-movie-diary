import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MoviesStateContextProvider } from '../../../context/MoviesStateContext';
import { SearchMovieContextProvider } from '../../../context/SearchMovieContext';
import RoutesElements from './UI/RoutesElements';

const App = () => (
  <BrowserRouter>
    <MoviesStateContextProvider>
      <SearchMovieContextProvider>
        <RoutesElements />
      </SearchMovieContextProvider>
    </MoviesStateContextProvider>
  </BrowserRouter>
);

export default App;
