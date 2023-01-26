import { ThemeProvider } from "styled-components";
import colors from "./utils/constants/colors";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <ThemeProvider theme={{ colors }}>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
