import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import CarouselSection from "../components/Home/CarouselSection";
import TechnologySection from "../components/Home/TechnologySection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CarouselSection />
      <AboutSection />
      <TechnologySection />
    </div>
  );
};

export default Home;
