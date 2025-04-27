
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <About />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Contact />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <NotFound />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
