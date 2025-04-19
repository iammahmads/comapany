import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Barbers from "../pages/Barbers/Barbers";

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
        path="/barbers"
        element={
          <>
            <Barbers />
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
    </Routes>
  );
};

export default AllRoutes;
