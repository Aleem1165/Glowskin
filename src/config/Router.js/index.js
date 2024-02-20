import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/profile",
        element: <Profile />,
      },
      
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
