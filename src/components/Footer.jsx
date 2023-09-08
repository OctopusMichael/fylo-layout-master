import React from "react";
import logoFooter from "../images/logoN.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="  bg-veryDarkBlue">
        <section className="max-w-[1440px] mx-auto text-white px-[20px] md:px-[80px] py-[90px]    flex flex-col">

        <div>
          <img className=" h-[40px] " src={logoFooter} alt="logo" />
        </div>
        <div className="md:pe-[0px] mt-[40px] md:mt-[40px] flex flex-col md:flex-row justify-between  ">
          <ul className="">
            <li className="flex flex-row gap-4  items-center mb-[10px] ">
              <img src={phone} alt="phone" />
              <p>Phone: +1-543-123-4567</p>
            </li>
            <li className="flex flex-row gap-4 items-center">
              <img src={email} alt="email" />
              <p>example@fylo.com</p>
            </li>
          </ul>
          <ul className="mt-[50px] md:mt-[0px]  flex flex-col gap-2 md:gap-3.5">
            <li>
              <a className="hover:text-blue-500" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Blog
              </a>
            </li>
          </ul>
          <ul className="mt-[50px] md:mt-[0px]  flex flex-col gap-2 md:gap-3.5 ">
            <li>
              <a className="hover:text-blue-500" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500" href="#">
                Privacy
              </a>
            </li>
          </ul>
          <ul className="flex flex-row justify-center  gap-3 md:gap-[25px] text-[14px] mt-[20px] md:mt-[0px] md:me-[155px]" >
            <li className="md:h-[25px] p-[5px]  rounded-full border-solid border-[1px]  border-white  hover:border-blue-500   hover:text-blue-500">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="md:h-[25px] p-[5px]  rounded-full border-solid border-[1px]  border-white  hover:border-blue-500   hover:text-blue-500">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="md:h-[25px] p-[5px]  rounded-full border-solid border-[1px]  border-white hover:border-blue-500   hover:text-blue-500">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
