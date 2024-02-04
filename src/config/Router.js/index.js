import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Home from "../../Screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
