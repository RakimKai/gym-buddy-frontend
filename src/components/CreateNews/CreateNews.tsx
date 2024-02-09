import { Td, Th, Tr } from "../Table";

const CreateNews = () => {
  return (
    <div>
      <h2 className="text-2xl text-gray-700 p-5">Upravljanje obavijesti:</h2>
      <div className="flex flex-col justify-center gap-y-4 ml-96 w-1/5">
        <div className="grid grid-cols-2 items-center w-full">
          <label>Naziv: </label>
          <input
            type="text"
            className="w-[155px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
            placeholder="Naziv obavijesti..."
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <label>Opis: </label>
          <input
            type="text"
            className="w-[552px] h-[80px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
            placeholder="Opis obavijesti..."
          />
        </div>
        <div className="mb-10">
          <button className="text-gray-200 bg-primary py-2 px-4 rounded mt-10">
            Objavi
          </button>
        </div>
      </div>

      <table className="w-1/2 mx-auto">
        <Tr>
          <Th>Naziv obavijesti</Th>
          <Th>Datum postavljanja</Th>
          <Th>Ime uposlenika</Th>
          <Th>Opcije</Th>
        </Tr>
        <tbody>
          <Tr noBorder>
            <Td className="text-primary">
              Otkrijte Novu Dimenziju Fitnessa - Dobrodošli u Naš Svijet
            </Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Uredi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">
              Uskoro: Fitness Revolution u Našoj Teretani!
            </Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Uredi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">
              Proljeće Je Vrijeme Za Novi Početak - Pozivamo Vas u Teretanu
            </Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Uredi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary w-[40%]">
              Fit & Fun: Otkrijte Radost Vježbanja u Našoj Teretani!
            </Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Uredi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreateNews;
