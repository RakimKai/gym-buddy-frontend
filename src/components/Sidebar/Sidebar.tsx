import IconBuilder from "../Icons/IconBuilder";
import IconHome from "../Icons/IconHome";
import IconPayment from "../Icons/IconPayment";
import IconSettings from "../Icons/IconSettings";
import IconLogout from "../Icons/IconLogout";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosPrivate } from "../Axios/axios";

const Sidebar = () => {
  var getUser = localStorage.getItem("user");
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await axiosPrivate.post("/user/logout");
      navigate("/login");
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="w-1/5 min-h-screen bg-[#F8F8F8] border-r border-r-gray-200">
      <div className="border-b border-b-gray-200 py-3 flex px-[1.625rem]">
        <IconBuilder />
        <h2 className="text-primary font-bold text-2xl ml-3 flex items-center cursor-pointer">
          Gym Buddy
        </h2>
      </div>
      <div className="flex flex-col justify-between h-[90%] px-[1.625rem]">
        <div className="py-6">
          <h2 className="text-primary uppercase font-semibold">Dashboard</h2>
          <div className="flex flex-col">
            <NavLink
              to={`/dashboard/user/home`}
              className={({ isActive }) =>
                isActive
                  ? "font-medium mb-1 mt-2 cursor-pointer"
                  : "font-medium mb-1 mt-2 cursor-pointer text-gray-600"
              }
            >
              <div className="inline-block mr-2">
                <IconHome />
              </div>
              Pregled obavijesti
            </NavLink>
            <NavLink
              to={`/dashboard/${
                getUser === "user" ? "user" : "employee"
              }/clanarine`}
              className={({ isActive }) =>
                isActive
                  ? "font-medium mb-1 mt-2 cursor-pointer"
                  : "font-medium mb-1 mt-2 cursor-pointer text-gray-600"
              }
            >
              <div className="inline-block mr-2">
                <IconPayment />
              </div>
              Članarina
            </NavLink>
          </div>
        </div>
        <div className="pb-8 cursor-pointer flex flex-col">
          <NavLink
            to={`/dashboard/${
              getUser === "user" ? "user" : "employee"
            }/profile`}
            className={({ isActive }) =>
              isActive
                ? "font-medium mb-1 mt-2 cursor-pointer"
                : "font-medium mb-1 mt-2 cursor-pointer text-gray-600"
            }
          >
            <div className="inline-block mr-2">
              <IconSettings />
            </div>
            Postavke
          </NavLink>
          <div onClick={handleClick} className="flex items-center mt-3 gap-x-2">
            <div>
              <IconLogout />
            </div>
            Odloguj se
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
