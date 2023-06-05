import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="gl-app">
    <div className="gl-layout">
      <Header />

      <div className="gl-layout__content">{children}</div>
    </div>

    <Footer />
  </div>
);

export default Layout;
