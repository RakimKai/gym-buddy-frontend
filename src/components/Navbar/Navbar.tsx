import IconDropdown from "../Icons/IconDropdown";

const Navbar = () => {
  const url = "../../public/profileImage.jpg";
  const getUser = localStorage.getItem("userType");
  return (
    <nav>
      <div className="flex justify-end">
        <div className="border-l border-l-gray-200 flex flex-row gap-12 items-center p-3 mr-2">
          <div className="flex flex-row items-center gap-5">
            <div
              className="w-10 h-10 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
            <h2 className="text-lg font-medium">Kimra Doe</h2>
          </div>
          <IconDropdown />
        </div>
      </div>
      <section className="flex flex-row border border-gray-200 font-medium text-gray-700 text-lg border-l-0">
        <div className="w-1/2 border-r border-r-gray-200 p-5">
          <p>
            Pozrdrav, <span className="font-bold text-black">Kimra Doe. </span>
            {getUser === "user"
              ? `Vaša članarina za ovaj mjesec je:`
              : `Sve članarine za ovaj mjesec su:`}
          </p>
          <h2 className="text-2xl mt-2 text-primary">
            Izmiren
            {getUser === "user" ? `a` : `e`} Uspješno
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
