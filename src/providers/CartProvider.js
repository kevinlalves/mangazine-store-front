import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({children}) => {
  const [localCart, setLocalCart] = useState({cart: []}); //puxar cart do servidor

  return (
    <CartContext.Provider value={{ localCart, setLocalCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;