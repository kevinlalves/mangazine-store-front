import { createContext, useContext } from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";


export const TOKEN_STORAGE_KEY = "token";

const AuthProviderContext = createContext({});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY);

  return (
    <AuthProviderContext.Provider value={{ token, setToken }}>
      {children}
    </AuthProviderContext.Provider>
  );
}

export const useAuth = () => useContext(AuthProviderContext);

export default AuthProvider;
