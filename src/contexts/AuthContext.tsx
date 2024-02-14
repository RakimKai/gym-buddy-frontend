import React, { createContext, useState } from "react";
import { User } from "../types/types";
import { useQuery } from "react-query";
import { getUser } from "../data/auth/auth";
import { useNavigate } from "react-router";

export interface AuthContextType {
  user: User | null;
  setUser: (value: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { isLoading } = useQuery("user", getUser, {
    onSuccess({ data }) {
      setUser(data);
    },
    onError() {
      navigate("/login");
    },
  });
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
