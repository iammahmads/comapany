import React, { useRef, useState } from "react";
import SliderComponent from "./SliderComponent";
import { barbers } from "../../data/barbersData.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CarouselSection = () => {
  const [barbersData, setBarbersData] = useState(barbers);

  const [barberIdx, setBarberIdx] = useState(0);

  const sliderRef = useRef(null);

  const handleRightClick = () => {
    sliderRef.current.slickNext();
  };

  const handleLeftClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="lg:px-0 pt-8 px-4 bg-home-carousel-bg">
      <div className="flex justify-center items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-1/2 h-full z-40 pointer-events-none">
          <div className="relative w-full h-full py-10 ">
            <div className="w-full h-full rounded-3xl border-2 border-white p-5 md:px-10 flex flex-col justify-between">
              <div className="flex flex-row justify-end items-center">
                {/* <div className="w-20 text-3xl sm:text-20 w-max text-white font-semibold italic">
                  Corte de Oro
                </div> */}

                <div>
                  <div className="flex gap-2 items-center justify-center font-libre">
                    <span className="text-4xl sm:text-40 w-max text-white font-semibold italic">
                      {(barberIdx + 1).toString().padStart(2, "0")}
                    </span>

                    <span className="text-xl font-semibold text-ashGray">
                      -{barbersData.length.toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* <p className="uppercase text-sm text-white font-semibold -mt-1.5">
                    Tap artist to book
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 self-end absolute top-0 left-[70%] max-sm:left-[88%] max-lg:left-[92%] -translate-x-1/2 w-max h-max z-40 bottom-12">
          <div
            className="rounded-full border border-transparent-white text-white text-3xl p-3 cursor-pointer"
            onClick={handleRightClick}
          >
            <MdKeyboardArrowRight />
          </div>

          <div
            className="rounded-full border border-transparent-white text-white text-3xl p-3 cursor-pointer"
            onClick={handleLeftClick}
          >
            <MdKeyboardArrowLeft />
          </div>
        </div>

        <div className="w-full h-full">
          <SliderComponent {...{ barbersData, setBarberIdx, sliderRef }} />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
