import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  token: string;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthContextProvider) {
  const [token, setToken] = useState<string>(localStorage.getItem("accessToken") || "");

  function login(token: string) {
    localStorage.setItem("accessToken", token);
    setToken(token);
  }

  function logout() {
    localStorage.removeItem("accessToken");
    setToken("");
  }

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
}
