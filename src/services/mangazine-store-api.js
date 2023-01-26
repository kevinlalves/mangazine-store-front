import axios from "axios";

const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const signIn = ({ email, password }) => (
  apiRequests.post("/auth/sign-in", { email, password })
);

export const signUp = ({ name, email, password }) => (
  apiRequests.post("/users", { name, email, password, address })
);

export const signOut = () => (
  apiRequests.delete("/auth/sign-out")
);
