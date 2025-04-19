import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { useBusinessContext } from "../../context/BusinessContext";
import { Link, useLocation } from "react-router-dom";
import CancelIcon from "../../assets/icons/CancelIcon";

const Header = () => {
  const { businessData } = useBusinessContext();

  const { instagram } = businessData || {};
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navData = [
    {
      elementName: "HOME",
      path: "/",
    },
    {
      elementName: "BOOK",
      path: "/barbers",
    },
    {
      elementName: "PORTFOLIO",
      path: instagram,
    },
    {
      elementName: "ABOUT",
      path: "/about",
    },
    {
      elementName: "CONTACT",
      path: "/contact",
    },
  ];

  const location = useLocation();

  const { pathname } = location;

  return (
    <>
      <header
        className={`w-full z-50 top-0 left-0 text-white ${
          pathname.includes("/barbers")
            ? " relative bg-black"
            : "absolute md:bg-transparent "
        }  `}
      >
        <div className="lg:w-4/5 m-auto max-w-contentWidth ">
          <div className="flex justify-between items-center p-4">
            <div className="w-fit">
              <Link to="/">
                <img
                  className="md:w-32 md:h-20 w-24 h-14"
                  src="/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div
              className={`w-full  md:justify-end flex md:flex-row flex-col md:relative md:top-0 absolute  top-20 left-0  md:bg-transparent bg-black font-bold md:opacity-100 ${
                isSidebarOpen ? "opacity-100" : "opacity-0"
              } `}
            >
              {navData.map((item, index) => (
                <Link onClick={toggleSidebar}
                  className={`md:px-3 cursor-pointer px-2 md:py-0 py-4 md:text-base text-xl md:border-none border-b-white border-b hover:md:text-yellow hover:text-yellow-500 ${
                    (item.path === "/" && pathname === "/") ||
                    (item.path !== "/" && pathname.startsWith(item.path))
                      ? "text-yellow"
                      : ""
                  }`}
                  key={index}
                  to={item.path}
                >
                  <span>{item.elementName}</span>
                </Link>
              ))}
            </div>
            <div
              onClick={toggleSidebar}
              className="md:hidden text-white block text-3xl cursor-pointer"
            >
              {isSidebarOpen ? (
                <CancelIcon className="text-white w-8" />
              ) : (
                <MdMenu />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
