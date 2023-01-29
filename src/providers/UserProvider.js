import { createContext, useContext, useEffect } from "react";
import { getCurrentUser } from "../services/mangazine-store-api";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import { useAuth } from "./AuthProvider";

export const USER_STORAGE_KEY = "user";

const UserProviderContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(USER_STORAGE_KEY);
  const { token, setToken } = useAuth();
  useEffect(() => {
    if (user) {
      return;
    }

    const authenticateUser = async () => {
      try {
        const userData = await getCurrentUser(token);
        setUser(userData);
      } catch (error) {
        setToken(null);
      }
    }

    authenticateUser();
  }, []);

  return (
    <UserProviderContext.Provider value={{ user, setUser }}>
      {children}
    </UserProviderContext.Provider>
  );
};

export const useUser = () => useContext(UserProviderContext);

export default UserProvider;
