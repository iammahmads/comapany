import { createContext, useContext, useEffect, useState } from "react";
import useApi from "../Api/Api";

const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const Api = useApi();

  const [businessData, setBusinessData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await Api.get(`business/details/cortedeoro`);
      if (response) {
        const { data, error } = response;
        if (!error) {
       
          setBusinessData(data);
        }
      }  
    } catch (error) {
      console.log("error while fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BusinessContext.Provider value={{ businessData }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => useContext(BusinessContext);
