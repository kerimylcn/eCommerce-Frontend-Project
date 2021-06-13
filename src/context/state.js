import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState(["product"]);
  const [cart, setCart] = useState(["test", "test"]);
  const [hamburger, setHamburger] = useState(false);
  const [services, setServices] = useState(false);

  const hamburgerHandler = () => setHamburger(!hamburger);
  const servicesHandler = () => setServices(!services);

  let sharedState = {
    favorites,
    setFavorites,
    cart,
    setCart,
    hamburger,
    hamburgerHandler,
    services,
    servicesHandler,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
