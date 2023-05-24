import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MoviesStateContextProvider } from '../../../context/MoviesStateContext';
import { SearchMovieContextProvider } from '../../../context/SearchMovieContext';
import RoutesElements from './UI/RoutesElements';

// TODO: change project structure
const App = () => (
  <Router>
    <MoviesStateContextProvider>
      <SearchMovieContextProvider>
        <RoutesElements />
      </SearchMovieContextProvider>
    </MoviesStateContextProvider>
  </Router>
);

export default App;
