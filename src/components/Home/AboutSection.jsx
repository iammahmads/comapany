import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-36 bg-custom-gradient relative">
      <div className="absolute top-0 left-0 w-full h-full bg-home-about-section bg-center bg-no-repeat bg-cover"></div>

      <div className="relative z-20 text-white lg:w-4/5 m-auto max-w-contentWidth flex mx-auto px-6">
        <div className="md:w-1/2 relative flex flex-wrap flex-col">
          <h2 className="text-h2-small sm:text-h2 font-bold mb-2.5">About</h2>

          <div className="flex gap-2 items-center">
            <div className="w-1/12 border-t-2 border-white"></div>
            <h6 className="text-h6 font-bold">Corte De Oro Barber shop</h6>
          </div>

          <div className="pt-16 pr-8 flex flex-col gap-5 text-white">
            <p className="">
              Welcome to Corte De Oro Barber Studio, where the journey from high
              school clippers to celebrity cuts has been nothing short of
              legendary. Born from the passion and talent of a high school kid
              with a dream, our shop stands as a testament to the power of
              dedication and the pursuit of excellence.
            </p>

            <p className="">
              Here, every fade, every line, and every trim is executed with the
              precision and flair demanded by the icons of basketball courts,
              the rhythms of hip hop, and the beats of rap. In our chairs have
              sat the heads of star athletes, where victory and defeat are
              etched in their hairlines; our mirrors have reflected the visions
              of hip hop artists, where style and identity merge in every cut.
            </p>

            <p className="">
              Step into our world, where high school dreams meet celebrity
              realms, and where the journey from the Westfield High’s locker
              room to the Houston Rockets’s Locker room is etched in every
              stroke.
            </p>

            <p className="">Welcome to Corte De Oro Barber Studio</p>

            <div className="mt-2.5 w-max">
              <Link to="/about">
                <span className="flex gap-5 items-center justify-center px-6 py-4 border-3 border-white uppercase">
                  <FaLongArrowAltRight />
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default AboutSection;
