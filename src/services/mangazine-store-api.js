import axios from "axios";

export const apiRequests = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authorization = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const signIn = ({ email, password }) =>
  apiRequests.post("/auth/sign-in", { email, password });

export const signUp = ({ name, email, password, address }) =>
  apiRequests.post("/users", { name, email, password, address });

export const getCurrentUser = (token) =>
  apiRequests.get("/users", authorization(token));

export const listProducts = ({ page, per }) =>
  apiRequests.get(`/products?page=${page}&per=${per}`);

export const updateUser = (updatedUserData, token) =>
  apiRequests.put("/users", updatedUserData, authorization(token));

export const setOrder = (order, token) =>
  apiRequests.post(
    "/checkout",
    order,
    authorization(token)
  );
