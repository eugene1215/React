// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Page404 from "../pages/Page404";
// import Layout from "../Layout";
import Foodie from "../pages/Foodie";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/foodie",
    element: <Foodie />,
    errorElement: <Page404 />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
    errorElement: <Page404 />,
  },
]);

export default routers;
