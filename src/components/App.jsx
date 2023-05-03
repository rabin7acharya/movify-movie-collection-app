import React from "react";
import { CssBaseline } from "@mui/material";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import useStyles from "./styles";

import { Actors, MovieInformation, Movies, Navbar, Profile } from "./index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/movie/:id", element: <MovieInformation /> },
      { path: "/actors/:id", element: <Actors /> },
      { path: "/", element: <Movies /> },
      { path: "/profile/:id", element: <Profile /> },
    ],
  },
]);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
