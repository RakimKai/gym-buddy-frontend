import { useRef, useState } from "react";
import Button from "../Button/Button";
import { Td, Th, Tr } from "../Table";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Modal from "../Modal/Modal";
import "react-toastify/dist/ReactToastify.css";
import SearchSVG from "../Icons/IconSearch";
import Input from "../Input/Input";
import useAuth from "../../hooks/useContext";
import {
  getAllMemberships,
  removeMembership,
  searchMemberships,
  updateMembership,
} from "../../data/auth/memberships";
import { useMutation, useQuery } from "react-query";
import { Membership } from "../../types/types";
import IconSpinner from "../Icons/IconSpinner";

const Clanarine = () => {
  const [showSave, setShowSave] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [membershipId, setMembershipId] = useState<string>();
  const [members, setMembers] = useState<Membership[] | null>(null);

  const inputRef = useRef<HTMLInputElement>();

  const { isEmployee } = useAuth();

  const { isLoading } = useQuery("memberships", getAllMemberships, {
    onSuccess({ data }) {
      setMembers(data.data.memberships);
    },
    onError() {},
  });

  const { mutate: editMembership, isLoading: isLoadingUpdate } = useMutation(
    updateMembership,
    {
      onSuccess() {
        setShowSave(false);
        toast("You have successfully updated the membership!");
      },
      onError() {},
    }
  );

  const { mutate: deleteMembership, isLoading: isLoadingRemove } = useMutation(
    removeMembership,
    {
      onSuccess() {
        setShowRemove(false);
        toast("You have successfully removed the membership!");
      },
      onError() {},
    }
  );

  const { mutate: search } = useMutation(searchMemberships, {
    onSuccess({ data }) {
      setMembers(data.data.memberships);
    },
    onError() {},
  });
  const handleUpdateMembership = () => {
    editMembership({
      membership_id: membershipId,
      created_at: new Date().toISOString(),
    });
  };

  const handleRemoveMembership = () => {
    deleteMembership({ membership_id: membershipId });
  };

  const handleShowSave = (id: string) => {
    setShowSave(true);
    setMembershipId(id);
  };
  const handleShowRemove = (id: string) => {
    setShowRemove(true);
    setMembershipId(id);
  };

  const handleOnClose = () => {
    setShowRemove(false);
    setShowSave(false);
  };

  if (isLoading || isLoadingUpdate || isLoadingRemove) {
    return <IconSpinner />;
  }
  return (
    <>
      {isEmployee ? (
        <>
          <h2 className="text-2xl text-gray-700 p-5">Članarine:</h2>
          <div className="flex flex-row justify-between gap-y-4 ml-96 w-2/5 mb-20">
            <div className="grid grid-cols-2 w-1/2 items-center ">
              <label>Ime klijenta: </label>
              <Input
                inputRef={inputRef}
                type="text"
                placeholder="Ime klijenta..."
                onChange={() => search({ name: inputRef.current?.value })}
              />
              <div className="absolute ml-[275px]">
                <SearchSVG />
              </div>
            </div>
          </div>

          <table className="w-1/2 mx-auto">
            <thead>
              <Tr>
                <Th>Ime klijenta</Th>
                <Th>Datum plaćanja</Th>
                <Th>Ime uposlenika</Th>
                <Th>Opcije</Th>
              </Tr>
            </thead>
            <tbody>
              {members &&
                members.map((data, index) => (
                  <Tr key={index} noBorder>
                    <Td className="text-primary">{data.member.name}</Td>
                    <Td className="text-primary">
                      {new Date(data.created_at).toLocaleDateString()}
                    </Td>
                    <Td className="text-primary">{data.employee.name}</Td>
                    <Td className="text-primary flex gap-x-4">
                      <h5
                        onClick={() => handleShowSave(data.id)}
                        className="cursor-pointer"
                      >
                        Obnovi
                      </h5>
                      <h5
                        onClick={() => handleShowRemove(data.id)}
                        className="cursor-pointer hover:text-red-400"
                      >
                        Ukloni
                      </h5>
                    </Td>
                  </Tr>
                ))}
            </tbody>
          </table>
          {showSave && (
            <Modal onClose={() => handleOnClose()} open={true}>
              <h2>Da li ste sigurni da želite obnoviti članarinu?</h2>
              <div className="flex gap-2 justify-end pt-6">
                <Button
                  label="Sačuvaj"
                  onClick={() => handleUpdateMembership()}
                />
                <Button
                  label="Zatvori"
                  variant="informative"
                  onClick={() => handleOnClose()}
                />
              </div>
            </Modal>
          )}
          {showRemove && (
            <Modal onClose={() => handleOnClose()} open={true}>
              <h2>Da li ste sigurni da želite ukloniti članarinu?</h2>
              <div className="flex gap-2 justify-end pt-6">
                <Button
                  label="Sačuvaj"
                  variant="danger"
                  onClick={() => handleRemoveMembership()}
                />
                <Button
                  label="Zatvori"
                  variant="informative"
                  onClick={() => handleOnClose()}
                />
              </div>
            </Modal>
          )}
          <div className="absolute">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </div>
        </>
      ) : (
        <h1 className="p-20">Not authorized...</h1>
      )}
    </>
  );
};

export default Clanarine;
