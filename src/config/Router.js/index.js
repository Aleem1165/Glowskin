import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Fairness from "../../Screens/Fairness";
import Questions from "../../Screens/Questions";
import TermsOfService from "../../Screens/TermsOfService";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import AMLPolicy from "../../Screens/AMLPolicy";
import AboutUs from "../../Screens/AboutUs";
import ContactUs from "../../Screens/ContactUs";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/fairness",
        element: <Fairness />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/tos",
        element: <TermsOfService />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/aml",
        element: <AMLPolicy />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
