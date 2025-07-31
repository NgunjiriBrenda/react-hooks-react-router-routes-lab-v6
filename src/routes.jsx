// src/routes.js
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/ErrorPage",
    element: <ErrorPage />,
  }
];


export default routes;

