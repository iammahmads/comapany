import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const technologies = [
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const TechnologySection = () => {
  return (
    <section className="relative pt-16 px-6 md:px-16 h-[75vh] sm:h-[65vh] md:h-[70vh] overflow-y-hidden">
      <div className="absolute bg-fixed bg-custom-gradient bg-cover  top-0 bottom-0 right-0  left-0 -z-50"></div>
      <div className="absolute bg-overlay opacity-10  top-0 bottom-0 right-0 left-0"></div>
      <div className="max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Technologies We Use
        </h2>
        <div>
          <Slider {...sliderSettings}>
            {technologies.map((tech, index) => (
              <div key={index} className="px-4 pt-8">
                <div className="flex flex-col items-center space-y-4 pt-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className=" flex items-center justify-center bg-white">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-24 h-24 object-contain mix-blend-multiply"
                    />
                  </div>
                  <p className="text-black font-medium text-lg pb-2">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
