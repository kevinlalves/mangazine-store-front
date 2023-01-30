import { CheckoutStyled } from "./index.styled";
import { useUser } from "../../providers/UserProvider";
import { calculateTotalPrice } from "../../utils/functions/calculateTotalPrice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingProducts from "../../components/loadingProducts/LoadingProducts";
import { useAuth } from "../../providers/AuthProvider";
import { setOrder, updateUser } from "../../services/mangazine-store-api";
import SuccessPurchasePage from "./components/successPurchase";
import CheckoutData from "./components/CheckoutData";
const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();
  const [isFinishedCheckout, setIsFinishedCheckout] = useState(false);
  const totalPrice = calculateTotalPrice(user.cart);
  useEffect(() => {
    if (!user || !user.cart.length) {
      navigate("/");
    }
  }, [user, user.cart, navigate]);
  const handleBuyButtonClick = async () => {
    const order = {
      user,
      total: Number(totalPrice.replace(",", ".")),
    };
    try {
      await setOrder(order, token);
      updateUser({...user, cart: []}, token);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsFinishedCheckout(true);
      }, 1500);
    } catch (error) {
      window.alert(error.response?.data);
    }
  };

  return (
    <CheckoutStyled>
      {isLoading && !isFinishedCheckout ? (
        <LoadingProducts color={`main`} />
      ) : isFinishedCheckout ? (
        <SuccessPurchasePage />
      ) : (
        <CheckoutData handleBuyButtonClick={handleBuyButtonClick} totalPrice={totalPrice} />
      )}
    </CheckoutStyled>
  );
};

export default CheckoutPage;
