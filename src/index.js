import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import directors from './pages/Directors';
import movie from './pages/Movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/directors',
    element: <Directors />
  },
  {
    path: '/actors',
    element: <Actors />
  },
  {
    path: 'movies/id',
    element: < Movie />
  },
   

]);

export default routes;