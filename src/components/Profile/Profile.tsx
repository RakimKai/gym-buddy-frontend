import Button from "../Button/Button";

const Profile = () => {
  const url = "../../public/profileImage.jpg";
  return (
    <div className="text-gray-700">
      <h2 className="text-2xl p-5">Postavke:</h2>
      <div className="w-[75%] mx-auto mt-[50px] flex justify-between gap-x-5">
        <div>
          <div
            className="w-48 h-48 bg-center cursor-pointer bg-cover rounded-full"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
          <h3 className="font-medium text-sm mt-3">
            Promjeni profilnu fotografiju
          </h3>
        </div>
        <div className="flex flex-col gap-y-4 w-1/5">
          <div className="grid grid-cols-2 items-center">
            <label>Ime: </label>
            <input
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Ime..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Prezime: </label>
            <input
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Prezime..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Spol: </label>
            <input
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Spol..."
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-2 items-center">
            <label>Datum rodjenja: </label>
            <input
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Ime..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Trenutna lozinka: </label>
            <input
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Prezime..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Nova lozinka: </label>
            <input
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Nova lozinka..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[75%] mx-auto">
        <Button label="Sačuvaj" />
      </div>
    </div>
  );
};

export default Profile;
