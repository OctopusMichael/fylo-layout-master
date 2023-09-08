import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-row  justify-between items-center  w-full  max-w-[1440px] mx-auto  px-[40px] pt-[30px]  md:px-[80px]  md:pt-[65px]">
      <a href="logo#">
        <img className=" h-[20px] md:h-[50px] " src={logo} alt="logo" />
      </a>

      <ul className="flex flex-row gap-[20px] md:gap-[58px] ">
        <li>
          <a className="md:text-[16px] hover:text-blue-400" href="#">
            Features
          </a>
        </li>
        <li>
          <a className="md:text-[16px] hover:text-blue-400" href="#">
            Team
          </a>
        </li>
        <li>
          <a className="md:text-[16px] hover:text-blue-400" href="#">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
