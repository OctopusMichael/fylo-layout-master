import React from "react";
import logo from "../images/logo.svg";
import { useScrollcontext } from "../../DataProvider";

const Navbar = () => {
  const scroll = useScrollcontext();


  return (
    <nav
      className={`${
        scroll ? "hidden" : "bg-transparent"
      }  flex flex-row fixed justify-between items-center  w-screen px-[40px] pt-[30px]  md:px-[80px] 2xl:px-[150px] md:pt-[65px]`}
    >
      <div className="">
        <img className=" h-[20px] md:h-[50px] " src={logo} alt="logo" />
      </div>
      <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
