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

const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(getUserDataFromLS());
  const [ownerUid, setOwnerUid] = useState(null);
  const [isSignInPending, setIsSignInPending] = useState(false);

  const auth = useMemo(() => getAuth(firebase), []);

  const isAuthUserOwner = useMemo(() => user && user.uid === ownerUid, [user, ownerUid]);

  const handleSignInWithGoogle = () => {
    setIsSignInPending(true);

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userData) => {
        const relevantUserData = getRelevantUserData(userData.user);

        localStorage.setItem(AUTH_USER_LS_KEY, JSON.stringify(relevantUserData));

        setOwnerUid(relevantUserData.uid);
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
    signOut(auth).then(() => {
      localStorage.removeItem(AUTH_USER_LS_KEY);

      setOwnerUid(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        const relevantUserData = getRelevantUserData(userData);

        setUser(relevantUserData);
      } else {
        localStorage.removeItem(AUTH_USER_LS_KEY);

        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const providerValue = useMemo(
    () => ({ user, ownerUid, isAuthUserOwner, setOwnerUid, handleSignInWithGoogle, handleSignOut }),
    [user, ownerUid, isAuthUserOwner, setOwnerUid, handleSignInWithGoogle, handleSignOut],
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {isSignInPending && <OverlaySpinner>Logging in..</OverlaySpinner>}

      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
