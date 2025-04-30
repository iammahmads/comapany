import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

export default function SliderComponent(props) {
  const { projects, setCurrentIdx, sliderRef } = props;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setCurrentIdx(next),
  };
  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {projects.map((data, idx) => {
          const { imgSrc, name, website, bio } = data;

          return (
            <div
              key={imgSrc + idx}
              className="w-full h-full px-4 sm:px-10 bg-carousel-bg-img bg-no-repeat bg-cover relative"
            >
              <div
                className={`absolute top-0 h-full w-full bg-[url('${imgSrc}')] bg-cover`}
              ></div>
              <div className="relative w-full lg:w-1/2 h-full m-auto pt-2">
                <div className="mt-20">
                  <img
                    src={imgSrc}
                    alt={imgSrc}
                    className="w-full h-full object-contain rounded-t-xl"
                  />
                </div>

                <div className="bottom-20 md:px-5 pt-2 flex justify-between flex-wrap gap-1 items-center w-full">
                  <div className="h-full flex flex-col flex-wrap items-stretch justify-center gap-x-2 xl:w-5/6 w-3/4 md:max-lg:w-5/6">
                    <span className="block text-3xl sm:text-40 font-bold uppercase text-white font-libre text-nowrap">
                      {name}
                    </span>
                    <span className="block pt-1 text-slate-300 text-sm font-semibold text-wrap">
                      {bio}
                    </span>
                    <div className="w-min pt-1 md:mt-1 lg:mt-2">
                      <Link
                        to={website}
                        className="px-2 sm:px-6 py-0.5 gap-4 flex items-center  border-3 border-white  text-white transition-all ease-linear hover:scale-105"
                        target="_blank"
                      >
                        <span className=" uppercase">Demo</span>
                        <MdOpenInNew className="text-2xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
