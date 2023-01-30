import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/mangazine-store-api";
import { useAuth } from "./AuthProvider";
import { useUser } from "./UserProvider";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const { user } = useUser();
  const { token } = useAuth();
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }
    const getCartFromUser = async () => {
      try {
        const { data } = await getCurrentUser(token);
        setLocalCart(data.cart);
      } catch (error) {
        setLocalCart([]);
      }
    };

    getCartFromUser();
  }, [user]);
  return (
    <CartContext.Provider value={{ localCart, setLocalCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
