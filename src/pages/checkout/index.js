import { CheckoutStyled } from "./index.styled";
import { useUser } from "../../providers/UserProvider";
import { calculateTotalPrice } from "../../utils/functions/calculateTotalPrice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingProducts from "../../components/loadingProducts/LoadingProducts";
import { useAuth } from "../../providers/AuthProvider";
import { setOrder } from "../../services/mangazine-store-api";
import SuccessPurchasePage from "./components/successPurchase";
import CheckoutData from "./components/CheckoutData";
import isEmpty from "../../utils/functions/isEmpty";
import { useMenu } from "../../providers/MenuProvider";
import Footer from "../../components/footer/Footer";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();
  const [isFinishedCheckout, setIsFinishedCheckout] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("pix");
  const { statusButton } = useMenu();

  useEffect(() => {
    if ((!user || isEmpty(user)) && statusButton.orders) {
      return navigate("/sign-in");
    }

    setTotalPrice(calculateTotalPrice(user?.cart));
  }, [user, user?.cart, navigate, statusButton.orders]);

  const handleBuyButtonClick = async () => {
    const order = {
      address: user?.address,
      cart: user?.cart,
      paymentMethod: selectedPayment,
    };
    console.log(order)
    try {
      await setOrder(order, token);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsFinishedCheckout(true);
      }, 1500);
    } catch (error) {
      window.alert(error.response?.data);
    }
  };
  if (isLoading) {
    return (
      <CheckoutStyled>
        <LoadingProducts color={`main`} />
      </CheckoutStyled>
    );
  }
  return (user && !isEmpty(user)) && (
    <>
      <CheckoutStyled>
        {isFinishedCheckout ? (
          <SuccessPurchasePage />
        ) : (
          <CheckoutData
            handleBuyButtonClick={handleBuyButtonClick}
            setSelectedPayment={setSelectedPayment}
            selectedPayment={selectedPayment}
            totalPrice={totalPrice}
          />
        )}
      </CheckoutStyled>
      <Footer />
    </>
  );
};

export default CheckoutPage;
