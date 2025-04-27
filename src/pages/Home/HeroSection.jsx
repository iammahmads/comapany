import { FaLongArrowAltRight, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-24 px-0 bg-fill bg-no-repeat bg-cover bg-home-hero-section">
      <div className="relative z-20 text-white lg:w-4/5 m-auto max-w-contentWidth flex mx-auto px-6">
        <div className="md:w-2/3 relative flex flex-wrap flex-col">
          <div className="text-6xl max-sm:text-40 font-black">
            <span>ZERO</span>
            <span className="text-yellow-500 inline">BUG</span>
            <div className="w-[60%] md:w-[35%] lg:w-[45%] pb-4 border-t-2 border-white mt-4 mb-20"></div>
          </div>

          <div className="w-full flex gap-6">
            <div>
              <div className="text-yellow-500 font-bold text-3xl p-2.5 border border-white flex w-max">
                <FaQuoteRight />
              </div>
            </div>

            <h3 className="md:text-2xl text-xl font-bold capitalize">
              Turning Ideas into Bug-Free Realities. <br />
              Web Development Without Compromise.
            </h3>
          </div>

          <div className="mt-11 w-max">
            <Link
              to={
                "https://api.whatsapp.com/send/?phone=%2B923057677534&text=Hi%21+I+need+your+assistance."
              }
              target="_blank"
            >
              <span className="hover:scale-105 transition-all ease-linear flex w-fit my-1 bg-black text-white font-bold gap-5 items-center justify-center sm:px-6 sm:py-2 px-4 py-1 border-3 border-yellow-500 font-semibold">
                <FaLongArrowAltRight className="text-yellow-500" />
                Contact us
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
