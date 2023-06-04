import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
