import { createContext, useState } from "react";


export const HomeContext = createContext({});

export const HomeProvider = ({children}) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([])

  return (
    <HomeContext.Provider value={{ page, setPage, products, setProducts }}>
      {children}
    </HomeContext.Provider>
  );
};