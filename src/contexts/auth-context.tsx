import { LoginResponse } from "@/api/sign-in";
import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  userSession: LoginResponse | undefined;
  login: (user: LoginResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthContextProvider) {
  const initialValue: LoginResponse | undefined = localStorage.getItem("userSession")
    ? (JSON.parse(localStorage.getItem("userSession") || "{}") as LoginResponse)
    : undefined;
  const [userSession, setUserSession] = useState<LoginResponse | undefined>(initialValue);

  function login(user: LoginResponse) {
    localStorage.setItem("userSession", JSON.stringify(user));
    setUserSession(user);
  }

  function logout() {
    localStorage.removeItem("userSession");
    setUserSession(undefined);
  }

  return <AuthContext.Provider value={{ userSession, login, logout }}>{children}</AuthContext.Provider>;
}
