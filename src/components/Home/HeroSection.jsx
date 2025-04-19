import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative pt-36 pb-36 px-0 bg-cover bg-home-hero-section">
      <div className="sized   absolute w-full h-full  left-0 z-0    box-border">
        <iframe
          title="Corte De Oro Barber"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src="https://www.youtube.com/embed/Mj7KARIRji4?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=Mj7KARIRji4&start=21&modestbranding=1&showinfo=0&iv_load_policy=3"
          className="w-full h-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            minWidth: "100%",
            height: "120%",
            maxWidth: "100%",
            aspectRatio: "16/9",
          }}
          playsinline="true"
        ></iframe>
      </div>

      <div className="bg-fixed bg-center bg-no-repeat bg-cover bg-home-hero-section bg-black opacity-0 md:opacity-0 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-20 text-white lg:w-4/5 m-auto max-w-contentWidth flex mx-auto px-6">
        <div className="md:w-1/2 relative flex flex-wrap flex-col">
          <div className="md:w-2/12 pb-4 border-t-2 border-white"></div>
          <h1 className="text-h1 max-sm:text-40 font-black  pb-12 mb-5">
            Corte de Oro <br /> Barber Studio
          </h1>

          <div className="w-full pb-4 border-t-2 border-white mb-5"></div>

          <div className="flex gap-6">
            <div>
              <div className="text-white font-bold text-3xl p-2.5 border border-white flex w-max">
                <FaQuoteRight />
              </div>
            </div>

            <h3 className="text-h3 max-sm:text-xl font-bold uppercase">
              "here Every cut Tells a Story & we're Setting Trends, One Head at
              a Time"
            </h3>
          </div>

          <div className="mt-11 w-max">
            <Link to="/barbers" className="">
              <span className="flex gap-5 items-center justify-center sm:px-6 sm:py-4 px-4 py-3 border-3 border-white uppercase">
                <FaLongArrowAltRight />
                Book an Appointment
              </span>
            </Link>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
