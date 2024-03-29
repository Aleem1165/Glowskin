import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Mines from "../../Screens/Mines";
import Fairness from "../../Screens/Fairness";
import Questions from "../../Screens/Questions";
import TermsOfService from "../../Screens/TermsOfService";
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import AMLPolicy from "../../Screens/AMLPolicy";
import AboutUs from "../../Screens/AboutUs";
import ContactUs from "../../Screens/ContactUs";
import Disclaimer from "../../Screens/Disclaimer";
import Plinko from "../../Screens/Plinko";
import CodeOfEthics from "../../Screens/CodeOfEthics";
import EditorialPolicy from "../../Screens/EditorialPolicy";
import Blog from "../../Screens/Blog";
import M9Bayonet from "../../Screens/M9Bayonet";
import Karambit from "../../Screens/Karambit";
import Huntsman from "../../Screens/Huntsman";
import Jackpot from "../../Screens/Jackpot";
import Unboxing from "../../Screens/Unboxing";
import Battle from "../../Screens/Battle";
import Subunboxing from "../../Screens/Subunboxing";
import Upgrader from "../../Screens/Upgrader";
import Casecreation from "../../Screens/Casecreation";
import Subcasebattle from "../../Screens/Subcasebattles";
import Tenk from "../../Screens/Tenk";

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
        path: "/10k",
        element: <Tenk/>,
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
      {
        path: "/cases/opencases",
        element: <Subunboxing />,
      },
      {
        path: "/casecreation",
        element: <Casecreation />,
      },
      {
        path: "/casebattle",
        element : <Subcasebattle/>
      },
      {
        path: "/upgrade",
        element: <Upgrader />,
      },
      {
        path: "/cases",
        element: <Unboxing />,
        children: [
          {
            path: "/cases/Classic",
            element: <Unboxing />,
          },
          {
            path: "/cases/Trending",
            element: <Unboxing />,
          },
          {
            path: "/cases/New",
            element: <Unboxing />,
          },
          {
            path: "/cases/Community",
            element: <Unboxing />,
          },
        ],
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/mines",
        element: <Mines />,
      },
      {
        path: "/plinko",
        element: <Plinko />,
      },
      {
        path: "/code-of-ethics",
        element: <CodeOfEthics />,
      },
      {
        path: "/editorial-policy",
        element: <EditorialPolicy />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/M9Bayonet",
        element: <M9Bayonet />,
      },
      {
        path: "/Karambit",
        element: <Karambit />,
      },
      {
        path: "/Huntsman",
        element: <Huntsman />,
      },
      {
        path: "/jackpot",
        element: <Jackpot />,
      },
      {
        path: "/battle",
        element: <Battle />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
