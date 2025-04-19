import { useContext, useEffect } from "react";
import StoreContext from "../../context/StoreContext";
import Loader from ".";

const GlobalLoader = () => {
  const { loader } = useContext(StoreContext);

  useEffect(() => {
    // Disable scrolling when the loader is shown
    if (loader) {
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the loader is hidden
      document.body.style.overflow = "visible";
    }
  }, [loader]);

  return loader ? <Loader /> : null;
};

export default GlobalLoader;
