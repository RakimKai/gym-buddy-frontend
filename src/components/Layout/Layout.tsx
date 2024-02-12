import { Navigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  return token ? (
    <div className="flex min-h-screen font-inter">
      <Sidebar />
      <div className="w-4/5 min-h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  ) : (
    // <Navigate to={"/login"} />
    <div className="flex min-h-screen font-inter">
      <Sidebar />
      <div className="w-4/5 min-h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
