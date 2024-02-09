import Button from "../Button/Button";
import { Td, Th, Tr } from "../Table";

const ClanarineUser = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-700 p-5">Članarine:</h2>
      </div>
      <div className="flex justify-end mb-20">
        <Button label="Izvrši plaćanje članarine" />
      </div>

      <table className="w-1/2 mx-auto">
        <Tr>
          <Th>Ime uposlenika</Th>
          <Th>Datum plaćanja</Th>
          <Th>Iznos</Th>
        </Tr>
        <tbody>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">50,00 KM</Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">50,00 KM</Td>
          </Tr>
          <Tr noBorder>
            <Td className="text-primary">John Doe</Td>
            <Td className="text-primary">08.12.2023</Td>
            <Td className="text-primary">50,00 KM</Td>
          </Tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClanarineUser;
