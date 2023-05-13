import React from 'react';

import { MoviesStateContextProvider } from '../../../context/MoviesStateContext';
import { SearchMovieContextProvider } from '../../../context/SearchMovieContext';
import Header from './UI/Header';
import AppContentWrapper from './UI/AppContentWrapper';
import Footer from './UI/Footer';

const App = ({ children }) => (
  <MoviesStateContextProvider>
    <SearchMovieContextProvider>
      <div className="app">
        <div className="app-content">
          <Header />

          <AppContentWrapper>{children}</AppContentWrapper>
        </div>

        <Footer />
      </div>
    </SearchMovieContextProvider>
  </MoviesStateContextProvider>
);

export default App;
