// import React from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AboutSection = () => {
//   return (
//     <section className="py-36 bg-custom-gradient relative">
//       <div className="absolute top-0 left-0 w-full h-full bg-home-about-section bg-center bg-no-repeat bg-cover"></div>

//       <div className="relative z-20 text-white lg:w-4/5 m-auto max-w-contentWidth flex mx-auto px-6">
//         <div className="md:w-1/2 relative flex flex-wrap flex-col">
//           <h2 className="text-h2-small sm:text-h2 font-bold mb-2.5">About</h2>

//           <div className="flex gap-2 items-center">
//             <div className="w-1/12 border-t-2 border-white"></div>
//             <h6 className="text-h6 font-bold">Corte De Oro Barber shop</h6>
//           </div>

//           <div className="pt-16 pr-8 flex flex-col gap-5 text-white">
//             <p className="">
//               Welcome to Corte De Oro Barber Studio, where the journey from high
//               school clippers to celebrity cuts has been nothing short of
//               legendary. Born from the passion and talent of a high school kid
//               with a dream, our shop stands as a testament to the power of
//               dedication and the pursuit of excellence.
//             </p>

//             <p className="">
//               Here, every fade, every line, and every trim is executed with the
//               precision and flair demanded by the icons of basketball courts,
//               the rhythms of hip hop, and the beats of rap. In our chairs have
//               sat the heads of star athletes, where victory and defeat are
//               etched in their hairlines; our mirrors have reflected the visions
//               of hip hop artists, where style and identity merge in every cut.
//             </p>

//             <p className="">
//               Step into our world, where high school dreams meet celebrity
//               realms, and where the journey from the Westfield High’s locker
//               room to the Houston Rockets’s Locker room is etched in every
//               stroke.
//             </p>

//             <p className="">Welcome to Corte De Oro Barber Studio</p>

//             <div className="mt-2.5 w-max">
//               <Link to="/about">
//                 <span className="flex gap-5 items-center justify-center px-6 py-4 border-3 border-white uppercase">
//                   <FaLongArrowAltRight />
//                   Read More
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";
import CustomLink from "../CustomLink";

const AboutSection = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
          At <span className="font-semibold text-blue-600">ZERO BUG</span>, we
          design and develop innovative web solutions to help businesses grow
          and succeed in the digital world. From idea to launch, our team
          delivers seamless, scalable, and beautiful digital products.
        </p>
        <div className="grid gap-8 md:grid-cols-2 text-left text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              What We Do
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Website Development</li>
              <li>Figma to Website</li>
              <li>Business websites</li>
              <li>Responsive Design</li>
              <li>SEO & Speed Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="leading-relaxed">
              We aim to transform ideas into meaningful digital experiences. By
              blending creativity with cutting-edge tech, we help brands stand
              out and succeed in the competitive online space. Quality,
              transparency, and client success are at the heart of everything we
              do.
            </p>
            <CustomLink to={"/about"}>Learn more</CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
