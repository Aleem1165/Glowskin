import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Fairness from "../../Screens/Fairness";
import Questions from "../../Screens/Questions";

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
      {
        path:"/fairness",
        element: <Fairness />,
      },
      {
        path:"/questions",
        element: <Questions />,
      },      
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
