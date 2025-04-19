import React from "react";
import { openingHours } from "./Data";
import {
  RiFacebookFill,
  RiGoogleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { useBusinessContext } from "../../context/BusinessContext";
import { formatPhoneNumber } from "../../handler/formatPhoneHandler";

const Footer = () => {
  const { businessData } = useBusinessContext();

  const {
    facebook,
    instagram,
    youtube,
    phone_number,
    email,
    city,
    address,
    state,
    zip,
  } = businessData || {};

  const contact = [
    {
      title: "Address:",
      timing: `${address}, ${city}, ${state}, ${zip}`,
    },
    {
      title: "Phone:",
      timing: phone_number ? formatPhoneNumber(phone_number) : "",
    },
    {
      title: "Email:",
      timing: email,
    },
  ];
  return (
    <>
      <footer className='bac relative w-full   sm:bg-[url("src/assets/images/bg-footer.jpg")] text-white'>
        <div className="absolute bg-overlay  top-0 bottom-0 right-0  left-0"></div>
        <div className="relative z-20 max-w-contentWidth lg:w-10/12 m-auto w-full  p-2 sm:p-4 py-9">
          <div className="flex sm:flex-row flex-col w-full justify-center gap-10 md:gap-1 text-center  sm:text-left   sm:justify-between">
            <div className="flex flex-col gap-3 ">
              <h3 className="font-bold text-2xl mb-2">Opening Hour</h3>
              {openingHours.map((item, index) => (
                <div
                  className="flex lg:flex-row  sm:flex-col gap-1 text-sm sm:justify-start justify-center"
                  key={index}
                >
                  <h5 className="font-bold ">{item.title}</h5>
                  <span>{item.timing}</span>{" "}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:w-1/3 ">
              <h3 className="font-bold text-2xl mb-2">Contact</h3>
              <div className="flex flex-col gap-3 ">
                {contact.map((item, index) => (
                  <div
                    className="flex lg:flex-row sm:w-full p-4 sm:p-0  sm:flex-col sm:justify-start justify-center gap-1 text-sm "
                    key={index}
                  >
                    <h5 className="font-bold ">{item.title}</h5>
                    <span>{item.timing}</span>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl mb-2">Keep in touch</h3>
              <div className="flex gap-1 sm:justify-start justify-center">
                <span className="p-2 text-black bg-white">
                  <a href={instagram}>
                    <RiInstagramFill />
                  </a>
                </span>
                <span className="p-2 text-black bg-white">
                  <a href={facebook} _blank>
                    <RiFacebookFill></RiFacebookFill>{" "}
                  </a>
                </span>
                <span className="p-2 text-black bg-white">
                  <a href={youtube}>
                    <RiYoutubeFill />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black  text-center  sm:text-base text-xs text-white">
        <p className=" ">
          Copyright © 2024 Corte De Oro Barber Studio | All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
