import Button from "../Button/Button";
import { Td, Th, Tr } from "../Table";

const Clanarine = () => {
  return (
    <div>
      <h2 className="text-2xl text-gray-700 p-5">Članarine:</h2>

      <div className="flex flex-col justify-center gap-y-4 ml-96 w-1/5 mb-20">
        <div className="grid grid-cols-2 items-center">
          <label>Ime klijenta: </label>
          <input
            type="text"
            className="w-[240px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
            placeholder="Ime klijenta..."
          />
        </div>
        <Button label="Obnovi članarinu" />
      </div>
      <table className="w-1/2 mx-auto">
        <Tr>
          <Th>Ime klijenta</Th>
          <Th>Datum plaćanja</Th>
          <Th>Ime uposlenika</Th>
          <Th>Opcije</Th>
        </Tr>
        <tbody>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Obnovi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Obnovi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Obnovi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">Mark Doe</Td>
            <Td className="text-primary flex gap-x-4">
              <h5 className="cursor-pointer">Obnovi</h5>
              <h5 className="cursor-pointer">Ukloni</h5>
            </Td>
          </Tr>
        </tbody>
      </table>
    </div>
  );
};

export default Clanarine;
