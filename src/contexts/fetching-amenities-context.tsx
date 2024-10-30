import { createContext, ReactNode, useState } from "react";

interface FetchingAmenitiesContextProps {
  isFetching: boolean;
  setIsFetching: (isFetching: boolean) => void;
}

interface FetchingAmenitiesContextProvider {
  children: ReactNode;
}

export const FetchingAmenitiesContext = createContext({} as FetchingAmenitiesContextProps);

export function FetchingAmenitiesProvider({ children }: FetchingAmenitiesContextProvider) {
  const [isFetching, setIsFetching] = useState(false);

  return (
    <FetchingAmenitiesContext.Provider value={{ isFetching, setIsFetching }}>
      {children}
    </FetchingAmenitiesContext.Provider>
  );
}
