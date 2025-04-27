import { useRef, useState } from "react";
import SliderComponent from "./SliderComponent";
import { projects } from "../../data/projectsData.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CarouselSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const sliderRef = useRef(null);

  const handleRightClick = () => {
    sliderRef.current.slickNext();
  };

  const handleLeftClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="lg:px-0 px-4 bg-home-carousel-bg py-4">
      <h3 className="text-yellow-400 w-full text-center text-3xl md:text-4xl font-bold mb-4 pt-4">
        Our Work
      </h3>
      <div className="flex justify-center items-center relative h-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-1/2 h-full z-40 pointer-events-none py-5">
          <div className="w-full h-full border-2 border-white rounded-3xl">
            <div className="relative w-full h-full">
              <div className="w-full h-full px-5 py-3 md:px-10 flex flex-col justify-between">
                <div className="flex flex-row justify-end items-center">
                  <span className="text-4xl sm:text-40 w-max text-white font-semibold italic">
                    {(currentIdx + 1).toString().padStart(2, "0")}
                  </span>

                  <span className="text-xl font-semibold text-ashGray">
                    -{projects.length.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 self-end absolute top-0 left-[70%] max-sm:left-[88%] max-lg:left-[92%] -translate-x-1/2 w-max h-max z-40 bottom-8">
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

        <div className="w-full h-full overflow-hidden">
          {projects && (
            <SliderComponent {...{ projects, setCurrentIdx, sliderRef }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
