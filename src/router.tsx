import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import RootLayout from "./components/Layout/RootLayout";
import Layout from "./components/Layout/Layout";
import Clanarine from "./components/Clanarine/Clanarine";
import ClanarineUser from "./components/ClanarineUser/ClanarineUser";
import CreateNews from "./components/CreateNews/CreateNews";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Register from "./components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            path: "/dashboard/user/home",
            element: <News />,
          },
          {
            path: "/dashboard/user/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/employee/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/employee/create-news",
            element: <CreateNews />,
          },
          {
            path: "/dashboard/user/clanarine",
            element: <ClanarineUser />,
          },
          {
            path: "/dashboard/employee/clanarine",
            element: <Clanarine />,
          },
        ],
      },
    ],
  },
]);
