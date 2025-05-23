import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import CancelIcon from "../../assets/icons/CancelIcon";
import { useState } from "react";

const Header = () => {
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
    <header className={`w-full bg-black z-50 text-white relative px-4 md:px-0 md:border-b-2 md:border-yellow-400`}>
      <div className="lg:w-4/5 m-auto max-w-contentWidth ">
        <div className="flex justify-between items-center px-4 py-1">
          <div className="w-fit z-50">
            <Link to="/">
              <img
                className="md:w-32 md:h-24 w-24 h-20"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div
            className={`w-full  md:justify-end flex md:flex-row flex-col md:relative md:top-0 absolute top-20 left-0  md:bg-transparent bg-black font-bold md:opacity-100 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            } `}
          >
            {navData.map((item, index) => (
              <Link
                onClick={() =>setIsSidebarOpen(false)}
                className={`md:px-3 cursor-pointer px-2 md:py-0 py-4 md:text-base text-xl md:border-none border-b-white border-b md:hover:text-yellow-500 hover:text-yellow-500 ${
                  (item.path === "/" && pathname === "/") ||
                  (item.path !== "/" && pathname.startsWith(item.path))
                    ? "text-yellow-500"
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
            className="md:hidden text-white block text-3xl cursor-pointer z-50"
          >
            {isSidebarOpen ? (
              <CancelIcon className="text-white w-8" />
            ) : (
              <MdMenu className="text-white w-8" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
