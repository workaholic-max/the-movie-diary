import React, { useState, useEffect, useMemo } from 'react';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

import firebase from '../firebase';
import { getUserDataFromLS, getRelevantUserData } from '../utils/authUtils';
import { AUTH_USER_LS_KEY } from '../enums/authEnums';
import OverlaySpinner from '../components/atoms/OverlaySpinner';
import Button from '../components/atoms/Button';

import googleIcon from '../../images/google-icon.png';

const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(getUserDataFromLS());
  const [isSignInPending, setIsSignInPending] = useState(false);

  const auth = useMemo(() => getAuth(firebase), []);

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    setIsSignInPending(true);

    signInWithPopup(auth, provider)
      .then((userData) => {
        const relevantUserData = getRelevantUserData(userData.user);

        localStorage.setItem(AUTH_USER_LS_KEY, JSON.stringify(relevantUserData));
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Something went wrong..');
      })
      .finally(() => {
        setIsSignInPending(false);
      });
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const renderLoginView = () => (
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        const relevantUserData = getRelevantUserData(userData);

        setUser(relevantUserData);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const providerValue = useMemo(() => ({ user, handleSignOut }), [user, handleSignOut]);

  return (
    <AuthContext.Provider value={providerValue}>
      {isSignInPending && <OverlaySpinner>Logging in..</OverlaySpinner>}

      {user ? children : renderLoginView()}
    </AuthContext.Provider>
  );
};

export default AuthContext;
