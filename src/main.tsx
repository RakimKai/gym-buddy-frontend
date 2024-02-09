import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import CreateNews from "./components/CreateNews/CreateNews";
import ClanarineUser from "./components/ClanarineUser/ClanarineUser";
import Clanarine from "./components/Clanarine/Clanarine";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/dashboard/user/home",
    element: (
      <Layout>
        <News />
      </Layout>
    ),
  },
  {
    path: "/dashboard/user/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/dashboard/employee/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/dashboard/employee/create-news",
    element: (
      <Layout>
        <CreateNews />
      </Layout>
    ),
  },
  {
    path: "/dashboard/user/clanarine",
    element: (
      <Layout>
        <ClanarineUser />
      </Layout>
    ),
  },
  {
    path: "/dashboard/employee/clanarine",
    element: (
      <Layout>
        <Clanarine />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
