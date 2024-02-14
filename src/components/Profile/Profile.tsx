import Button from "../Button/Button";
import { useRef } from "react";
import useAuth from "../../hooks/useContext";
import { useMutation } from "react-query";
import { editUser } from "../../data/auth/auth";
import { EditUser } from "../../types/Types";

const Profile = () => {
  const url = "../../public/profileImage.jpg";
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const { mutate: updateUser, isLoading: updateUserLoading } = useMutation(
    editUser,
    {
      onSuccess() {
        alert("gymra");
      },
    }
  );

  const { user, setUser } = useAuth();

  const handleClick = async () => {
    const editUser: EditUser = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      date_of_birth: dateRef.current?.value,
      phone_number: phoneRef.current?.value,
      current_password: currentPasswordRef.current?.value,
      new_password: newPasswordRef.current?.value,
    };
    updateUser(editUser);
  };
  console.log(user);
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
              ref={nameRef}
              defaultValue={user?.name}
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Ime i prezime..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Email: </label>
            <input
              ref={emailRef}
              defaultValue={user?.email}
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Email..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Broj telefona: </label>
            <input
              ref={phoneRef}
              defaultValue={user?.phone_number}
              type="tel"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Broj telefona..."
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-2 items-center">
            <label>Datum rodjenja: </label>
            <input
              ref={dateRef}
              defaultValue={user?.date_of_birth}
              type="text"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Datum rodjenja..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Trenutna lozinka: </label>
            <input
              ref={currentPasswordRef}
              type="password"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Trenutna lozinka..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Nova lozinka: </label>
            <input
              ref={newPasswordRef}
              type="password"
              className="w-[152px] outline-1 outline-gray-200 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Nova lozinka..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[75%] mx-auto">
        <Button
          disabled={updateUserLoading}
          label="Sačuvaj"
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default Profile;
