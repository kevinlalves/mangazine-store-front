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
import { MenuProvider } from "./providers/MenuProvider";
import AuthProvider from "./providers/AuthProvider";

export default function App() {
  return (
    <ThemeProvider theme={{ colors, fonts }}>
      <BrowserRouter>
        <UserProvider>
          <MenuProvider>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </AuthProvider>
          </MenuProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
