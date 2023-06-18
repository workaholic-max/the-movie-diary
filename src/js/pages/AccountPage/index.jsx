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
        <div className="gl-account-page__content">
          <img src={user.photoURL} alt="user icon" />

          <p>{user.displayName}</p>

          <div className="gl-account-page__shared-token">
            Link:
            <a href={shareToken} target="_blank" rel="noreferrer">
              {shareToken}
            </a>
          </div>

          <Button theme="warning" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
