import React, { useContext } from 'react';

import SearchMovieContext from '../../../../context/SearchMovieContext';
import SearchedMovieView from '../../../organisms/SearchedMovieView';
import Header from './Header';
import Footer from './Footer';

const AppContentWrapper = ({ children }) => {
  const { searchedMovieData } = useContext(SearchMovieContext);

  const renderContent = () => {
    if (searchedMovieData) {
      return <SearchedMovieView />;
    }

    return children;
  };

  return (
    <div className="gl-app">
      <div className="gl-app__content gl-app-content">
        <Header />

        <div className="gl-app-content__wrapper">{renderContent()}</div>
      </div>

      <Footer />
    </div>
  );
};

export default AppContentWrapper;
