import { ThemeProvider } from "styled-components";
import colors from "./utils/constants/colors";
import fonts from "./utils/constants/fonts";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserProvider";
import HomePage from "./pages";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import ProductPage from "./pages/product";
import CheckoutPage from "./pages/checkout";

export default function App() {
  return (
    <ThemeProvider theme={{ colors, fonts }}>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
