import { createContext, useContext, useState, useEffect } from "react";
import ProductImages from "../assets/images/productimages.js";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [hamburger, setHamburger] = useState(false);
  const [services, setServices] = useState(false);
  const [categorieA, setCategorieA] = useState(true);
  const [categorieB, setCategorieB] = useState(true);
  const [footerContact, setFooterContact] = useState(true);
  const [footerCategories, setFooterCategories] = useState(true);
  const [footerAbout, setFooterAbout] = useState(true);
  const [popularItemsSlicer] = useState(1);
  const [isLoginShow, setIsLoginShow] = useState(false);
  const [isColorClicked, setIsColorClicked] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const [productData] = useState([
    {
      id: 1,
      image: ProductImages.product1,
      name: "Kristina Dam Oak Table With White Marble Top",
      icon: null,
      time: null,
      price: 799.55,
      button: false,
      hover: true,
      message: false,
    },
    {
      id: 2,
      image: ProductImages.product2,
      name: "Hay - About A Lounge Chair AAL93",
      icon: null,
      time: null,
      price: 659.55,
      button: true,
      hover: false,
      message: false,
    },
    {
      id: 3,
      image: ProductImages.product3,
      name: "Active Facial Mask and Charcoal Soap",
      icon: null,
      time: null,
      price: 129.55,
      button: false,
      hover: true,
      message: false,
    },
    {
      id: 4,
      image: ProductImages.product4,
      name: "Cocktail Table Walnut | YES",
      icon: null,
      time: null,
      price: 299.99,
      button: false,
      hover: true,
      message: false,
    },
    {
      id: 5,
      image: ProductImages.product5,
      name: "Hay - About A Lounge Chair AAL93",
      icon: null,
      time: null,
      price: 659.55,
      button: false,
      hover: true,
      message: false,
    },
    {
      id: 6,
      image: ProductImages.product6,
      name: "TORY DESK CALENDAR",
      icon: null,
      time: null,
      price: 410.99,
      button: false,
      hover: true,
      message: false,
    },
    {
      id: 7,
      image: ProductImages.product7,
      name: "CH445 Wing Chair on SUITE NY",
      icon: null,
      time: null,
      price: 330.55,
      button: false,
      hover: true,
      message: false,
    },
    {
      id: 8,
      image: ProductImages.productmessage,
      name: "My dragons are misbehaving again. Unbelieveable!",
      icon: ProductImages.productmessageicon,
      time: "5H AGO",
      price: 1,
      button: false,
      hover: false,
      message: true,
    },
  ]);
  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key} = ${value}`;
    },
  };
  const storageType = cookieStorage;
  const consentPropertyName = "jdc_consent";

  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  const hamburgerHandler = () => setHamburger(!hamburger);
  const servicesHandler = () => setServices(!services);
  const categorieHandlerA = () => setCategorieA(!categorieA);
  const categorieHandlerB = () => setCategorieB(!categorieB);
  const footerContactHandler = () => setFooterContact(!footerContact);
  const footerCategoriesHandler = () => setFooterCategories(!footerCategories);
  const footerAboutHandler = () => setFooterAbout(!footerAbout);
  const isLoginHandler = () => setIsLoginShow(!isLoginShow);
  const isColorHandler = () => setIsColorClicked(!isColorClicked);

  // Tracks window size and closes hamburger menu and services sub
  useEffect(() => {
    if (size > 767) {
      setServices(false);
      setHamburger(false);
      setCategorieA(true);
      setCategorieB(true);
      setFooterContact(true);
      setFooterCategories(true);
      setFooterAbout(true);
    } else {
      setCategorieA(false);
      setCategorieB(false);
      setFooterContact(false);
      setFooterCategories(false);
      setFooterAbout(false);
    }
  }, [size]);

  //size a g??re popularItemsSlicer de??i??ecek
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  //Listens ESC event to close login modal
  useEffect(() => {
    const closeLogin = (e) => {
      if (e.keyCode === 27) {
        setShowLogin(false);
      }
    };
    window.addEventListener("keydown", closeLogin);
    return () => window.removeEventListener("keydown", closeLogin);
  }, []);

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
    footerAbout,
    footerAboutHandler,
    productData,
    popularItemsSlicer,
    isLoginShow,
    isLoginHandler,
    isColorClicked,
    isColorHandler,
    setShowLogin,
    showLogin,
    saveToStorage,
    storageType,
    cookieStorage,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
