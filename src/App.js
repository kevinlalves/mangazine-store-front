import { ThemeProvider } from "styled-components";
import colors from "./utils/constants/colors";
import fonts from "./utils/constants/fonts";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import HomePage from "./pages";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import ProductPage from "./pages/product";
import CheckoutPage from "./pages/checkout";
import CartPage from "./pages/cart";
import MenuProvider from "./providers/MenuProvider";
import AuthProvider from "./providers/AuthProvider";
import CartProvider from "./providers/CartProvider";

export default function App() {
  return (
    <ThemeProvider theme={{ colors, fonts }}>
      <BrowserRouter>
        <MenuProvider>
          <AuthProvider>
            <UserProvider>
              <CartProvider>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/sign-in" element={<SignInPage />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
              </CartProvider>
            </UserProvider>
          </AuthProvider>
        </MenuProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
