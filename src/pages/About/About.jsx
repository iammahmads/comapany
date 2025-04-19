import React from "react";

const About = () => {
  return (
    <>
      <div className="set relative  bg-[url('src/assets/images/bg-img-08-free-img.jpg')]  h-screen	 w-full   object-cover	bg-center	bg-no-repeat bg-cover">
        <div className="absolute bg-overlay  top-0 bottom-0 right-0  left-0"></div>
        <div className="relative max-w-contentWidth sm:w-4/5 sm:m-auto p-4  text-white">
          <div className="flex flex-col mt-40 gap-4 justify-end  md:pb-0 pb-8 ">
            <div className="flex md:flex-row md:items-end gap-1 font-semibold flex-col    ">
              <span className="w-20 h-px mb-1 bg-white "></span>
              <span>Cutting through the noise.</span>
            </div>
            <div className="flex md:flex-col flex-row gap-2 font-extrabold text-5xl md:text-8xl">
              <span>ABOUT</span>
              <span>US</span>
            </div>
          </div>
        </div>
      </div>
      <div className="back relative text-white bg-[url('src/assets/images/bg-image.jpg')] ">
        <div className="absolute bg-overlay  top-0 bottom-0 right-0  left-0"></div>
        <div className="my-20 z-20 max-w-contentWidth relative sm:w-4/5 p-4 flex flex-col gap-20 m-auto">
          <div className="  flex flex-col gap-8 ">
            <div className="flex gap-1 flex-col  font-semibold">
              <span>/ 01</span>
              <span className="w-20 h-px bg-blue-500 "></span>
            </div>
            <div>
              <span className="lg:text-6xl sm:text-5xl  text-3xl  font-bold">
                Who We Are
              </span>
            </div>
            <div className="flex flex-row items-end gap-1 sm:text-base text-sm font-semibold     ">
              <span className="w-10 mb-1 h-px bg-white "></span>
              <span>Professional Barrier </span>
            </div>
          </div>
          <div className="flex flex-col xl:w-3/5 md:w-4/5 text-sm font-semibold gap-4">
            <p className="leading-6">
              Welcome to Corte De Oro Barber Studio, where the journey from high
              school clippers to celebrity cuts has been nothing short of
              legendary. Born from the passion and talent of a high school kid
              with a dream, our shop stands as a testament to the power of
              dedication and the pursuit of excellence.
            </p>
            <p className="leading-6">
              Here, every fade, every line, and every trim is executed with the
              precision and flair demanded by the icons of basketball courts,
              the rhythms of hip hop, and the beats of rap. In our chairs have
              sat the heads of star athletes, where victory and defeat are
              etched in their hairlines; our mirrors have reflected the visions
              of hip hop artists, where style and identity merge in every cut.
            </p>
            <p className="leading-6">
              Step into our world, where high school dreams meet celebrity
              realms, and where the journey from the Westfield High’s locker
              room to the Houston Rockets’s Locker room is etched in every
              stroke.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full text-white bg-black">
        <div className="py-28 sm:w-4/5 p-4 flex flex-col max-w-contentWidth gap-20 m-auto">
          <div className="  flex flex-col gap-8 ">
            <div className="flex gap-1 flex-col  font-semibold">
              <span>/ 02</span>
              <span className="w-20 h-px bg-blue-500 "></span>
            </div>
            <div>
              <span className="lg:text-6xl sm:text-5xl  text-3xl  font-bold">
                Services
              </span>
            </div>
            <div className="flex flex-row items-end gap-1 sm:text-base text-sm font-semibold     ">
              <span className="w-10 mb-1 h-px bg-white "></span>
              <span>Pride In Each Service</span>
            </div>
          </div>
          <div className="flex flex-col xl:w-3/5 md:w-4/5 text-sm font-semibold gap-4">
            <p className="leading-6">
              Welcome to Corte De Oro Barber Studio. Our team of skilled artist
              specializes in crafting iconic looks that exude confidence and
              style. Step into our shop and enjoy our range of premium services
              designed to elevate your style to new heights.
            </p>
            <p className="leading-6">
              <span className="font-extrabold text-base">
                Signature Haircuts:{" "}
              </span>{" "}
              Let our expert artist work their magic with precision cuts
              tailored to your unique style and personality. Whether you’re
              after a classic fade, a modern wolf cut, or something bold and
              edgy, we’ve got you covered.
            </p>
            <p className="leading-6">
              <span className="font-extrabold text-base">Custom Designs: </span>{" "}
              Ready to take your haircut to the next level? Our team is
              well-versed in the art of intricate designs and patterns. From
              geometric shapes to personalized logos, we’ll turn your vision
              into a work of art.
            </p>
            <p className="leading-6">
              <span className="font-extrabold text-base">
                Straight Razor Shaves:
              </span>{" "}
              Treat yourself to the luxury of a traditional straight razor
              shave, expertly executed by our master barbers. Sit back, relax,
              and let us treat you to unparalleled attention to detail.
            </p>
            <p className="leading-6">
              <span className="font-extrabold text-base">Bear Grooming:</span>{" "}
              Whether you’re rocking a full beard or a perfectly sculpted
              stubble, our beard grooming services will keep your facial hair
              looking sharp and polished. From trims and shaping to conditioning
              treatments, we’ll help you maintain your signature style.
            </p>
            <p className="leading-6">
              At Corte De Oro Barber Studio, we’re more than just a place to get
              a haircut – we’re a destination for self-expression and
              confidence-building. Book your appointment today and experience
              the difference of a truly exceptional grooming experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
