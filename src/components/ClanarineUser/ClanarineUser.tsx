import { useQuery } from "react-query";
import { getMemberships } from "../../data/auth/memberships";
import useAuth from "../../hooks/useContext";
import Button from "../Button/Button";
import { Td, Th, Tr } from "../Table";
import { useState } from "react";
import { Membership } from "../../types/types";
import IconSpinner from "../Icons/IconSpinner";

const ClanarineUser = () => {
  const { isEmployee } = useAuth();
  const [memberships, setMemberships] = useState<Membership[] | null>(null);
  const { isLoading } = useQuery("memberships", getMemberships, {
    onSuccess({ data }) {
      setMemberships(data.data.memberships);
    },
    onError() {},
  });
  if (isLoading) {
    return <IconSpinner />;
  }
  return (
    <>
      {isEmployee ? (
        <h1 className="p-20">Not authorized</h1>
      ) : (
        <div className="w-10/12 mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-700 p-5">Članarine:</h2>
          </div>

          <table className="w-1/2 mx-auto">
            <thead>
              <Tr>
                <Th>Ime uposlenika</Th>
                <Th>Datum plaćanja</Th>
                <Th>Iznos</Th>
              </Tr>
            </thead>
            <tbody>
              {memberships &&
                memberships.map((membership, index) => (
                  <Tr key={index} noBorder>
                    <Td className="text-primary">{membership.employee.name}</Td>
                    <Td className="text-primary">{membership.created_at}</Td>
                    <Td className="text-primary">{membership.amount}KM</Td>
                  </Tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-end mr-[300px] mt-14">
            <Button label="Izvrši plaćanje članarine" />
          </div>
        </div>
      )}
    </>
  );
};

export default ClanarineUser;
