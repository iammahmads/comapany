import { useLocation } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GlobalLoader from "./common/Loader/GlobalLoader";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <GlobalLoader />
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
