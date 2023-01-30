import { createContext, useContext, useState } from "react";

export const MenuProviderContext = createContext({});

const MenuProvider = ({ children }) => {
  const [statusButton, setStatusButton] = useState({
    user: false,
    home: true,
    orders: false,
    cart: false,
  });

  return (
    <MenuProviderContext.Provider value={{ statusButton, setStatusButton }}>
      {children}
    </MenuProviderContext.Provider>
  );
};

export const useMenu = () => useContext(MenuProviderContext);

export default MenuProvider;
