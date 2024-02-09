import AuthHeader from "../AuthHeader/AuthHeader";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import rootBG from "../../assets/rootBg.jpg";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../Axios/axios";
import { LoginRequest } from "../../types/Types";
import { useRef, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [checkbox, setCheckBox] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleClick = async () => {
    const loginData: LoginRequest = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    try {
      console.log(loginData);
      const response = await axiosPrivate.post("/login", loginData);
      if (checkbox) {
        localStorage.setItem("token", response.data.data.token);
      } else {
        sessionStorage.setItem("token", response.data.data.token);
      }
      navigate("/dashboard/user/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="h-screen bg-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${rootBG})` }}
    >
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
                handleChange={() => setCheckBox((prevState) => !prevState)}
                checked={checkbox}
              />
              <Button
                label="Registruj se"
                variant="text"
                type="button"
                onClick={() => navigate("/")}
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
