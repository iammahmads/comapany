import React, {
  createContext,
  useContext,
  useState,
} from "react";


const initialState = {
  loader: false,
  setLoader: () => {},
};

const StoreContext = createContext(initialState);

export const GlobalStoreProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  
  return (
    <StoreContext.Provider value={{  loader, setLoader }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export default StoreContext;
