import { NavLink, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return localStorage.getItem("token") ? <Outlet /> : <NavLink to="/" />;
};

export default PrivateRoute;
