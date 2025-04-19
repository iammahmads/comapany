import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import CarouselSection from "../components/Home/CarouselSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CarouselSection />
      <AboutSection />
    </div>
  );
};

export default Home;
