import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SliderComponent(props) {
  const { barbersData, setBarberIdx, sliderRef } = props;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setBarberIdx(next),
  };
  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {barbersData.map((data, idx) => {
          const { imgSrc, name, website, bio } = data;

          return (
            <div
              key={imgSrc + idx}
              className="w-full h-full px-4 sm:px-10 bg-carousel-bg-img bg-no-repeat bg-cover"
            >
              <div className="relative w-full lg:w-1/2 h-full m-auto pt-10">
                <div className="absolute bottom-20 flex justify-between flex-wrap gap-3 items-center w-full">
                  <div className="flex flex-wrap items-center justify-between gap-x-2 xl:w-5/6 w-3/4 md:max-lg:w-5/6">
                    <span className="px-5 text-3xl sm:text-40 font-bold uppercase text-white font-libre">
                      {name}
                    </span>
                    <span className="px-5 text-slate-300 text-sm font-semibold -mt-1.5">
                      {bio}
                    </span>
                    <div className="px-5 w-max mt-2">
                      <Link to={website} className="">
                        <span className="flex gap-5 items-center justify-center px-2 sm:px-6 py-2 border-3 border-white uppercase text-white">
                          Book now
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <img
                  src={imgSrc}
                  alt={imgSrc}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
