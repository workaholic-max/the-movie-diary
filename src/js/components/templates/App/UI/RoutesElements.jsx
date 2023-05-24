import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../../../../pages/HomePage';
import AppContentWrapper from './AppContentWrapper';

const RoutesElements = () => (
  <Routes>
    {/* <Route path="/:userId/movie/:imdbID" element={null} /> */}

    {/* <Route path="/:userId" element={null} /> */}

    <Route path="/movie/:imdbID" element={<AppContentWrapper>nud</AppContentWrapper>} />

    <Route
      path="/"
      element={(
        <AppContentWrapper>
          <HomePage />
        </AppContentWrapper>
      )}
    />

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RoutesElements;
