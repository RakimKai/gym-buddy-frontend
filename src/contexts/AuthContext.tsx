import React, { createContext, useState } from "react";
import { User } from "../types/types";
import { getUser } from "../data/auth/auth";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import IconSpinner from "../components/Icons/IconSpinner";
export interface AuthContextType {
  user: User | null;
  setUser: (value: User | null) => void;
  isEmployee: boolean | null;
  setIsEmployee: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isEmployee, setIsEmployee] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isLoading } = useQuery("user", getUser, {
    onSuccess({ data }) {
      setUser(data.data.user);
      setIsEmployee(data.data.user.role === "Employee");
    },
    onError() {
      navigate("/login");
    },
  });
  if (isLoading) {
    return <IconSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isEmployee,
        setIsEmployee,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
