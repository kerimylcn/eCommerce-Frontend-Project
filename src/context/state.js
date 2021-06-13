import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState(["test", "product"]);
  const [cart, setCart] = useState(["test"]);

  let sharedState = {
    favorites,
    setFavorites,
    cart,
    setCart,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
