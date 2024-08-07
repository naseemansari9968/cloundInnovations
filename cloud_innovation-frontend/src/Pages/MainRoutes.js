import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
