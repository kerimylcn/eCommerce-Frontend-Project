import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState(["product"]);
  const [cart, setCart] = useState(["test", "test"]);
  const [hamburger, setHamburger] = useState(false);

  let sharedState = {
    favorites,
    setFavorites,
    cart,
    setCart,
    hamburger,
    setHamburger,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
