import React from 'react';

import { ContextProvider } from './js/context/Context';
import Page from './js/pages/Page';

const App = () => (
  <div className="app">
    <ContextProvider>
      <Page />
    </ContextProvider>
  </div>
);

export default App;
