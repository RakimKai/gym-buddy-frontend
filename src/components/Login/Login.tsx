import AuthHeader from "../AuthHeader/AuthHeader";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import rootBG from "../../assets/rootBg.jpg";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../types/types";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getUser, loginUser } from "../../data/auth/auth";
import apiClient from "../Axios/axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useContext";

const Login = () => {
  const { setUser, setIsEmployee } = useAuth();

  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const { refetch } = useQuery("profile", getUser, {
    enabled: false,
    onSuccess({ data }) {
      setUser(data.data.user);
      setIsEmployee(data.data.user.role === "Employee");

      navigate("/dashboard/user/home");
    },
  });

  const { mutate: login } = useMutation(loginUser, {
    async onSuccess({ data }) {
      apiClient.defaults.headers.common.Authorization =
        "Bearer " + data.data.token;
      if (rememberMe) {
        localStorage.setItem("token", data.data.token);
      } else {
        sessionStorage.setItem("token", data.data.token);
      }
      await refetch();
    },
    onError() {
      toast("Nevalidan email ili username");
    },
  });

  const handleClick = async () => {
    const loginData: LoginRequest = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    login(loginData);
  };

  return (
    <div
      className="h-screen bg-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${rootBG})` }}
    >
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
      <ToastContainer />
      <div className="flex h-auto w-full max-w-[34.75rem] flex-col rounded border border-gray-200 shadow-sm bg-white p-16">
        <div className="relative flex flex-col">
          <AuthHeader
            title="Gym Buddy"
            paragraph="Unesite polja ispod da se prijavite"
          />
          <div className="form">
            <div className="mb-2">
              <Input id="email" label="Email" inputRef={emailRef} />
            </div>
            <Input
              id="Password"
              label="Lozinka"
              type="password"
              inputRef={passwordRef}
            />
            <div className="mb-5 flex items-center justify-between mt-5">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                label="Zapamti me"
                handleChange={() => setRememberMe((prevState) => !prevState)}
                checked={rememberMe}
              />
              <Button
                label="Registruj se"
                variant="text"
                type="button"
                onClick={() => navigate("/register")}
              />
            </div>
            <div>
              <Button
                type="submit"
                label="Prijavi se"
                className="mb-6"
                fullWidth
                onClick={() => handleClick()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
