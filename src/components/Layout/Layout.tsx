import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen font-inter">
      <Sidebar />
      <div className="w-4/5 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
