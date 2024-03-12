import Button from "../Button/Button";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { editUser } from "../../data/auth/auth";
import { EditUser } from "../../types/types";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Modal from "../Modal/Modal";
import useAuth from "../../hooks/useContext";
import { queryClient } from "../Layout/RootLayout";

const Profile = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const [shown, setShown] = useState<boolean>(false);
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState<string>(
    user?.image ?? "../../public/profileImage.jpg"
  );
  const [file, setFile] = useState<File | null>(null);
  const { mutate: updateUser, isLoading: updateUserLoading } = useMutation(
    editUser,
    {
      onSuccess() {
        queryClient.invalidateQueries("user");
        toast("Uspješno ste ažurirali profil!");
      },
      onError() {
        toast("Invalid info.");
      },
    }
  );

  const handleOnSave = async () => {
    setShown(false);
    const editUser: EditUser = {
      name: nameRef.current?.value,
      date_of_birth: dateRef.current?.value,
      phone_number: phoneRef.current?.value,
      image: file as File,
      current_password: currentPasswordRef.current?.value,
      new_password: newPasswordRef.current?.value,
    };
    updateUser(editUser);
  };

  const handleOnClose = () => {
    setShown(false);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target?.files[0];
      setFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="text-gray-700">
      <h2 className="text-2xl p-5">Postavke:</h2>
      <div className="w-[75%] mx-auto mt-[100px] flex justify-between ">
        <div>
          <div
            className="w-48 h-48 bg-center cursor-pointer bg-cover rounded-full"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            onClick={() => imageRef.current?.click()}
          ></div>
          <input
            type="file"
            hidden
            ref={imageRef}
            onChange={(e: any) => handleImageChange(e)}
          />
          <h3 className="font-medium text-sm mt-3">
            Promjeni profilnu fotografiju
          </h3>
        </div>
        <div className="flex flex-col gap-y-4 w-1/5 ">
          <div className="grid grid-cols-2 items-center">
            <label>Ime: </label>
            <input
              ref={nameRef}
              defaultValue={user?.name}
              type="text"
              className="w-[152px] outline-1 outline-gray-200 ml-3 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Ime..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Datum rodjenja: </label>
            <input
              defaultValue={user?.date_of_birth}
              ref={dateRef}
              type="text"
              className="w-[152px] outline-1 outline-gray-200 ml-3 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Datum rodjenja..."
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label>Broj telefona: </label>
            <input
              ref={phoneRef}
              defaultValue={user?.phone_number}
              type="text"
              className="w-[152px] outline-1 outline-gray-200 ml-3 focus:outline-gray-200 px-3 py-2 border-2 border-gray-200 rounded"
              placeholder="Broj telefona..."
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
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
          <div className="flex justify-end w-[75%] ml-[75px] mt-[8px]">
            <Button label="Sačuvaj" onClick={() => setShown(true)} />
          </div>
        </div>
      </div>

      {shown && (
        <Modal onClose={() => handleOnClose()} open={true}>
          <h2>Da li ste sigurni da želite sačuvati promjene?</h2>
          <div className="flex gap-2 justify-end pt-6">
            <Button label="Sačuvaj" onClick={() => handleOnSave()} />
            <Button label="Zatvori" onClick={() => handleOnClose()} />
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
    </div>
  );
};

export default Profile;
