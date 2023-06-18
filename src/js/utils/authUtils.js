import { AUTH_USER_LS_KEY } from '../enums/authEnums';

/**
 * Get only relevant user data after auth
 *
 * @param userData {Object}
 *
 * @return {Object}
 */
export const getRelevantUserData = (userData) => {
  const { displayName, email, photoURL, uid } = userData;

  return {
    displayName,
    email,
    photoURL,
    uid,
  };
};

/**
 * Get user data from local storage (LS)
 *
 * @return {Object || null}
 */
export const getUserDataFromLS = () => JSON.parse(localStorage.getItem(AUTH_USER_LS_KEY));
