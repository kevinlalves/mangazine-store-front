import { createContext, useContext, useEffect } from "react";
import { getCurrentUser } from "../services/mangazine-store-api";
import isEmpty from "../utils/functions/isEmpty";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import { useAuth } from "./AuthProvider";

export const USER_STORAGE_KEY = "user";

const UserProviderContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(USER_STORAGE_KEY);
  const { token, setToken } = useAuth();

  useEffect(() => {
    if (user && !isEmpty(user)) {
      return;
    }

    const authenticateUser = async () => {
      try {
        const userData = await getCurrentUser(token);
        console.log(userData);
        setUser(userData.data);
      } catch (error) {
        // setToken(null);
        console.log(error);
      }
    };

    authenticateUser();
  }, [setToken, setUser, token, user]);

  return (
    <UserProviderContext.Provider value={{ user, setUser }}>
      {children}
    </UserProviderContext.Provider>
  );
};

export const useUser = () => useContext(UserProviderContext);

export default UserProvider;
