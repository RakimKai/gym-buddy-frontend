import IconBuilder from "../Icons/IconBuilder";
import IconHome from "../Icons/IconHome";
import IconPayment from "../Icons/IconPayment";
import IconSettings from "../Icons/IconSettings";
import IconLogout from "../Icons/IconLogout";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useContext";
import IconInfo from "../Icons/IconInfo";
import { useMutation } from "react-query";
import { logoutUser } from "../../data/auth/auth";
import apiClient from "../Axios/axios";

const Sidebar = () => {
  const { isEmployee, setUser } = useAuth();
  const { mutate: logout } = useMutation(logoutUser, {
    onSuccess() {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      setUser(null);
      apiClient.defaults.headers.common = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    },
  });

  const handleClick = async () => {
    logout();
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
              to={`/dashboard/${isEmployee ? "employee" : "user"}/clanarine`}
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
            {isEmployee && (
              <NavLink
                to={`/dashboard/employee/create-news`}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium mb-1 mt-2 cursor-pointer"
                    : "font-medium mb-1 mt-2 cursor-pointer text-gray-600"
                }
              >
                <div className="inline-block mr-2 ">
                  <IconInfo />
                </div>
                Upravljanje obavijesti
              </NavLink>
            )}
          </div>
        </div>
        <div className="pb-8 cursor-pointer flex flex-col">
          <NavLink
            to={`/dashboard/${isEmployee ? "employee" : "user"}/profile`}
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
          <NavLink
            to={"/login"}
            onClick={() => handleClick()}
            className={({ isActive }) =>
              isActive
                ? "font-medium mb-1 mt-2 cursor-pointer"
                : "font-medium mb-1 mt-2 cursor-pointer text-gray-600"
            }
          >
            <div className="inline-block mt-3 mr-2">
              <IconLogout />
            </div>
            Odloguj se
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
