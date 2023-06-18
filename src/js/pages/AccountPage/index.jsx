import React, { useContext } from 'react';

import AuthContext from '../../context/AuthContext';
import Layout from '../../components/templates/Layout';
import Button from '../../components/atoms/Button';

const AccountPage = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const shareToken = `${window.location.origin}/${user?.uid}`;

  return (
    <Layout>
      {user && (
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
      )}
    </Layout>
  );
};

export default AccountPage;
