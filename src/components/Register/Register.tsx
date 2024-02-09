import AuthHeader from "../AuthHeader/AuthHeader";
import Button from "../Button/Button";
import Input from "../Input/Input";
import rootBG from "../../assets/rootBg.jpg";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../Axios/axios";
import { RegisterRequest } from "../../types/Types";
import { useRef } from "react";

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfRef = useRef<HTMLInputElement>();

  const handleOnClick = async () => {
    const requestData: RegisterRequest = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfRef.current?.value,
    };

    try {
      const response = await axiosPrivate.post("/register", requestData);
      localStorage.setItem("token", response.data.data.token);
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
            title="Gym buddy"
            paragraph="Unesite polja ispod da se prijavite"
          />
          <div className="form">
            <div className="mb-2">
              <Input id="email" label="Email" inputRef={emailRef} />
            </div>
            <div className="mb-2">
              <Input id="name" label="Korisničko ime" inputRef={nameRef} />
            </div>
            <div className="mb-2">
              <Input
                id="password"
                label="Lozinka"
                type="password"
                inputRef={passwordRef}
              />
            </div>
            <Input
              id="Password"
              label="Potvrda lozinke"
              type="password"
              inputRef={passwordConfRef}
            />
            <div className="mb-5 flex items-center justify-between mt-5">
              <Button
                label="Već imate korisnički račun?"
                variant="text"
                type="button"
                onClick={() => navigate("/login")}
              />
            </div>
            <div>
              <Button
                type="submit"
                label="Prijavi se"
                className="mb-6"
                fullWidth
                onClick={() => handleOnClick()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
