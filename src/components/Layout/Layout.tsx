import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Bounce, ToastContainer } from "react-toastify";
import Modal from "../Modal/Modal";
import QrCodeSVG from "../Icons/IconQRCode";
import Button from "../Button/Button";
import { Children, useState } from "react";
import useAuth from "../../hooks/useContext";
import { Outlet } from "react-router";
import { AuthProvider } from "../../contexts/AuthContext";

const Layout = () => {
  const [shown, setShown] = useState<boolean>(false);
  const { isEmployee } = useAuth();
  return (
    <div className="flex min-h-screen font-inter">
      <Sidebar />
      <div className="w-4/5 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
      {!isEmployee && (
        <div
          className="absolute right-5 bottom-5 bg-primary p-3 rounded-full cursor-pointer hover:bg-blue-500 transition-colors duration-300 flex justify-center items-center"
          onClick={() => setShown(true)}
        >
          <span className="w-7 h-7">
            <QrCodeSVG />
          </span>
        </div>
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
      {shown && (
        <Modal onClose={() => setShown(false)} open={true}>
          <h1 className="font-medium mb-3">QR kod za prijavu u teretanu</h1>
          <div className="flex justify-center flex-col items-center gap-5">
            <div className="bg-primary rounded p-5 flex justify-center items-center w-fit ">
              <span className="w-16 h-16">
                <QrCodeSVG />
              </span>
            </div>
            <Button label="Zatvori" onClick={() => setShown(false)} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Layout;
