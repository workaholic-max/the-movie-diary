import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import Layout from '../../components/templates/Layout';
import Button from '../../components/atoms/Button';

const AccountPage = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  const shareToken = `${window.location.origin}/${user?.uid}`;

  return (
    <Layout>
      <div className="gl-account-page">
        <div className="gl-account-page__content gl-account-content">
          <div className="gl-account-content__details">
            <img src={user.photoURL} alt="user icon" />

            <div>
              <p>{user.displayName}</p>

              <Button theme="warning" onClick={handleSignOut}>
                Log out
              </Button>
            </div>
          </div>

          <a
            href={shareToken}
            target="_blank"
            rel="noreferrer"
            className="gl-account-page__shared-token"
          >
            {shareToken}
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
