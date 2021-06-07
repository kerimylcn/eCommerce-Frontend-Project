import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isDropDown, setIsDropDown] = useState(false);

  const onClickHandler = () => {
    setIsDropDown(!isDropDown);
  };

  let sharedState = {
    isDropDown,
    onClickHandler,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
