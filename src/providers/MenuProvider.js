import { createContext, useState } from "react";


export const MenuContext = createContext({});

export const MenuProvider = ({children}) => {
  const [statusButton, setStatusButton] = useState({
    user: false,
    home: true,
    orders: false,
    cart: false,
  });

  return (
    <MenuContext.Provider value={{ statusButton, setStatusButton }}>
      {children}
    </MenuContext.Provider>
  );
};