import { useContext } from "react";
import AuthContext, { AuthContextType } from "../contexts/AuthContext";

const useAuth = () => useContext(AuthContext) as AuthContextType;
export default useAuth;
