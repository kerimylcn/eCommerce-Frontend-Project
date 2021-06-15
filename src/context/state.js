import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState(["product"]);
  const [cart, setCart] = useState(["test", "test"]);
  const [hamburger, setHamburger] = useState(false);
  const [services, setServices] = useState(false);
  const [categorieA, setCategorieA] = useState(true);
  const [categorieB, setCategorieB] = useState(true);
  const [footerContact, setFooterContact] = useState(true);
  const [footerCategories, setFooterCategories] = useState(true);

  const hamburgerHandler = () => setHamburger(!hamburger);
  const servicesHandler = () => setServices(!services);
  const categorieHandlerA = () => setCategorieA(!categorieA);
  const categorieHandlerB = () => setCategorieB(!categorieB);
  const footerContactHandler = () => setFooterContact(!footerContact);
  const footerCategoriesHandler = () => setFooterCategories(!footerCategories);

  const [size, setSize] = useState(window.innerWidth);

  //Tracks window size and closes hamburger menu and services sub
  useEffect(() => {
    if (size > 480) {
      setServices(false);
      setHamburger(false);
      setCategorieA(true);
      setCategorieB(true);
      footerContactHandler(true);
      footerCategoriesHandler(true);
    } else {
      setCategorieA(false);
      setCategorieB(false);
      footerContactHandler(false);
      footerCategoriesHandler(false);
    }
  }, [size]);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  /////

  let sharedState = {
    favorites,
    setFavorites,
    cart,
    setCart,
    hamburger,
    hamburgerHandler,
    services,
    servicesHandler,
    size,
    categorieA,
    categorieB,
    categorieHandlerA,
    categorieHandlerB,
    footerContact,
    footerContactHandler,
    footerCategories,
    footerCategoriesHandler,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
