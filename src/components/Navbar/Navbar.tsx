import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useContext";
import IconDropdown from "../Icons/IconDropdown";
import { NavLink } from "react-router-dom";
import IconHome from "../Icons/IconHome";
import IconLogout from "../Icons/IconLogout";
import { useMutation } from "react-query";
import { logoutUser } from "../../data/auth/auth";
import apiClient from "../Axios/axios";

const Navbar = () => {
  const { user, isEmployee, setUser } = useAuth();

  const [imageUrl, setImageUrl] = useState<string>(
    user?.image ?? "../../public/profileImage.jpg"
  );
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  });

  return (
    <nav>
      <div className="flex justify-end relative ">
        <div ref={ref} className="flex flex-row gap-12 items-center p-3 mr-2 ">
          <div className="flex flex-row items-center gap-5 ">
            <div
              className="w-10 h-10 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <h2 className="text-lg  font-medium">{user?.name}</h2>
          </div>
          <div onClick={() => setShow(!show)}>
            <IconDropdown />
          </div>
          {show && (
            <div className="absolute animate-fade-in  top-14 pt-2 py-2 bg-white z-30 w-[200px]  border border-gray-200  flex justify-center flex-col items-start rounded-b-md">
              <NavLink
                to={`/dashboard/employee/profile`}
                className={() => "font-medium mb-3 mt-2 cursor-pointer  "}
              >
                <div className="inline-block pl-4 mr-2 ">
                  <IconHome />
                </div>
                Profil
              </NavLink>
              <NavLink
                to={"/login"}
                className={() => "font-medium mb-3 mt-2 cursor-pointer"}
                onClick={() => logout()}
              >
                <div className="inline-block pl-4 mr-2">
                  <IconLogout />
                </div>
                Log out
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <section className="flex flex-row border border-gray-200 font-medium text-gray-700 text-lg border-l-0">
        <div className="w-1/2 border-r border-r-gray-200 p-5">
          <p>
            Pozrdrav,{" "}
            <span className="font-bold text-black"> {user?.name}, </span>
            {isEmployee
              ? `sve članarine za ovaj mjesec su:`
              : `Vaša članarina za ovaj mjesec je:`}
          </p>
          <h2 className="text-2xl mt-2 text-primary">
            Izmiren
            {isEmployee ? `e` : `a`} uspješno
          </h2>
        </div>
        <div className="w-1/3 border-r border-r-gray-200 p-5">
          <p>Trenutno članova koji obavljaju trening:</p>
          <h2 className="text-2xl mt-2 text-primary">35</h2>
        </div>
        <div className="w-1/4 border-r border-r-gray-200 p-5">
          <p>Najprometniji termin:</p>
          <h2 className="text-2xl mt-2 text-primary">16:00h</h2>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
