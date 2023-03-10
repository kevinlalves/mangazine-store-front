import { ThemeProvider } from "styled-components";
import colors from "./utils/constants/colors";
import fonts from "./utils/constants/fonts";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import HomePage from "./pages";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import MenuProvider from "./providers/MenuProvider";
import AuthProvider from "./providers/AuthProvider";
import OrdersPage from "./pages/orders";
import CheckoutPage from "./pages/checkout";
import SingleProductPage from "./pages/product/SingleProductPage";
import CartPage from "./pages/cart";

export default function App() {
  return (
    <ThemeProvider theme={{ colors, fonts }}>
      <BrowserRouter>
        <MenuProvider>
          <AuthProvider>
            <UserProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<SingleProductPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </UserProvider>
          </AuthProvider>
        </MenuProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
