import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { navLinksData } from "../utils/helpers";
import logo from "../assets/teamorange-logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-[79px] sticky top-0 bg-[#fff] z-[100] mx-auto flex justify-center items-center border-b-[1px] font-titleFont border-b-gray-400 px-10 gap-[10rem]">
      <div className="flex items-center gap-[40px] md:gap-[30px] mdl:gap-[20px] lg:gap-[10px]">
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="hidden mdl:flex items-center gap-4 lg:gap-10">
          {navLinksData.map(({ _id, title, link }, i) => (
            <li
              key={_id}
              className="text-base text-gray-500 cursor-pointer hover:text-designColor duration-300 uppercase font-medium"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className="cursor-pointer text-xl mdl:hidden text-designColor"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <GiHamburgerMenu size={25} />
        </span>
        {showMenu && (
          <div className="w-[100%] h-screen overflow-y-scroll absolute top-0 left-0 bg-bodyColor opacity-[0.98] z-50">
            <div className="w-full h-full flex items-center justify-center">
              <ul className="w-full h-[50%] flex flex-col items-center gap-4">
                {navLinksData.map(({ _id, title, link }, i) => (
                  <li
                    key={_id}
                    className="text-base h-[60px] font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <span
              className="absolute top-4 right-4 text-designColor text-2xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
