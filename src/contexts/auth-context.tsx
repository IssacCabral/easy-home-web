import { LoginResponse } from "@/api/sign-in";
import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  userSession: LoginResponse;
  login: (user: LoginResponse) => void;
  // logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthContextProvider) {
  const [userSession, setUserSession] = useState<LoginResponse>(
    JSON.parse(localStorage.getItem("userSession") || "{}"),
  );

  function login(user: LoginResponse) {
    localStorage.setItem("userSession", JSON.stringify(user));
    setUserSession(user);
  }

  // function logout() {
  //   localStorage.removeItem("accessToken");
  //   setToken("");
  // }

  return <AuthContext.Provider value={{ userSession, login }}>{children}</AuthContext.Provider>;
}
