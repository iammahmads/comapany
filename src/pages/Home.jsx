
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import CarouselSection from "../components/Home/CarouselSection";
import TechnologySection from "../components/Home/TechnologySection";
import ReviewsSection from "../components/Home/ReviewSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CarouselSection />
      <AboutSection />
      <TechnologySection />
      <ReviewsSection />
    </div>
  );
};

export default Home;
