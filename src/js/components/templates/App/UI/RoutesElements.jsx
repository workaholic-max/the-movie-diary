import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../../../../pages/HomePage';
import MoviePage from '../../../../pages/MoviePage';
import Layout from './Layout';

const RoutesElements = () => (
  <Routes>
    {/* <Route path="/:userId/movie/:imdbID" element={null} /> */}

    {/* <Route path="/:userId" element={null} /> */}

    <Route
      path="/movie/:imdbID"
      element={(
        <Layout>
          <MoviePage />
        </Layout>
      )}
    />

    <Route
      path="/"
      element={(
        <Layout>
          <HomePage />
        </Layout>
      )}
    />

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RoutesElements;
