import React from "react";
import ilustration from "../images/illustration-2.svg";
import row from "../images/icon-arrow.svg";
import avatar from "../images/avatar-testimonial.jpg";

const Content = () => {
  return (
    <section
      className="mt-[150px] md:mt-[0px] h-auto text-center  px-[40px] md:px-[80px] 2xl:px-[150px]  flex flex-col xl:flex-row py-[100px] md:pt-[160px]  "
      id="content"
    >
      <div className="md:order-2  md:p-[20px]">
        <img className="mb-[100px] md:mb-[0px] md:w-[800px]  md:ms-[30px] md:mt-[20px]"  src={ilustration} alt="ilustration" />
      </div>
      <div className=" " >
        <h1 className="font-bold md:text-[40px]   text-center lg:text-start  ">Stay productive, wherever you are</h1>
        <p className=" text-center md:text-start mt-[20px] lg:mt-[30px] md:text-[16px] lg:w-[550px]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className=" text-center md:text-start mt-[20px] md:mt-[20px] md:text-[16px] md:w-[600px]">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <div className=" flex flex-col justify-center mt-[30px] md:justify-start  md:mt-[20px]">
          <h1 className=" hover:text-lime-400 cursor-pointer  text-lime-600  flex  flex-row items-center justify-center md:justify-start  ">
            {" "}
            See how Fylo works <img className="ms-1 " src={row} alt="row" />
          </h1>

          <hr className="w-[160px]  mx-auto  md:mx-0 text-lime-600" />
        </div>

        <div
          className="w-[90%] md:w-[60%] md: bg-white shadow-lg h-auto md:h-[220px] ps-[20px] md:ps-[32px] pe-[5px] md:pe-[50px] py-[20px] md:py-[25px] mx-auto lg:mx-0 mt-[20px] md:mt-[40px]"
          id="card"
        >
          <p className="text-start md:text-[14px] text-[12px] mt-[30px] ">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex flex-row items-center mt-[20px] ">
            <img className="rounded-full h-[30px]" src={avatar} alt="avatar" />
            <div className="text-start ms-[10px]">
              <h1 className="text-[14px] font-bold">Kyle Burton</h1>
              <h1 className="text-[10px]">Founder & CEO, Huddle</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Content;
