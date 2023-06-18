import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import AudioContext from '../../../context/AuthContext';
import SearchMovieContext from '../../../context/SearchMovieContext';
import SearchMovieModal from '../../organisms/SearchMovieModal';
import Button from '../../atoms/Button';
import Header from './UI/Header';
import Footer from './UI/Footer';

import googleIcon from '../../../../images/google-icon.png';

const Layout = ({ children }) => {
  const { user, setOwnerUid, handleSignInWithGoogle } = useContext(AudioContext);

  const { isSearchMovieModalOpened, handleSearchMovie, handleCloseSearchMovieModal } = useContext(
    SearchMovieContext,
  );

  const { ownerID } = useParams();

  const renderContent = () => {
    // TODO: create restrictedRoute and LoginPage
    if (!user) {
      return (
        <div className="gl-login-view">
          <h1>The Movie Diary</h1>

          <div className="gl-login-view__box">
            <span>login required to proceed</span>

            <Button theme="success" onClick={handleSignInWithGoogle}>
              <img src={googleIcon} alt="Google icon" />

              <span>Log in with Google</span>
            </Button>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="gl-layout">
          <Header />

          <div className="gl-layout__content">{children}</div>
        </div>

        <Footer />

        {isSearchMovieModalOpened && (
          <SearchMovieModal onSubmit={handleSearchMovie} onClose={handleCloseSearchMovieModal} />
        )}
      </>
    );
  };

  useEffect(() => {
    setOwnerUid(ownerID || user?.uid);
  }, [ownerID]);

  return (
    <div
      className={classNames('gl-app', {
        'gl-app--auth': !user,
      })}
    >
      {renderContent()}
    </div>
  );
};

export default Layout;
