import { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import unauthenticatedPages from "../utils/constants/unauthenticatedPages";
import useLocalStorage from "../utils/hooks/useLocalStorage";

export const USER_STORAGE_KEY = "user";

export const UserProviderContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useLocalStorage(USER_STORAGE_KEY);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (unauthenticatedPages.includes(pathname)) {
      return;
    }
  }, [user, navigate, pathname]);

  return (
    <UserProviderContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserProviderContext.Provider>
  );
};
