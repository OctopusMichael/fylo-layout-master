import React from "react";
import hero from "../images/illustration-1.svg";
import {
  useButtonContext,
  useEmailcontext,
  useErrContext,
} from "../../DataProvider";

const Hero = () => {
  const email = useEmailcontext();
  const button = useButtonContext();
  const err = useErrContext();

  return (
    <section className="h-auto mb-[150px] md:mb-[0px]  px-[40px] md:px-[80px]  md:py-[200px]  text-center md:text-start flex flex-col  lg:flex-row max-w-[1440px] mx-auto ">
      <div className="md:order-2 ">
        <img
          className="pt-[150px] md:pt-[0px] pb-[50px] md:pb-[0px] mx-auto md:my-[100px] lg:my-[0px] md:h-[500px] lg:h-auto"
          src={hero}
          alt="hero"
        />
      </div>
      <div className="flex flex-col">
        <h1 className=" font-bold text-[28px] md:text-[40px] md:mt-[75px] text-center lg:text-start   ">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="md:text-[18px] mt-[20px] md:mt-[20px] text-center lg:text-start  ">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form
        id="form"
          onSubmit={button}
          className="md:w-auto w-[90%]  flex flex-col  mx-auto md:mx-0 md:mt-[40px] gap-[10px]  md:justify-start   my-[20px] md:my-[0px] lg:flex-row "
        >
          <div className="flex flex-col lg:w-[320px]">
            <input
              onChange={email}
              className={`${
                err ? "border-2  border-rose-500   " : " border-2 "
              } border ps-[20px]  rounded-[5px] h-[44px] `}
              type="text"
              placeholder="Enter your email"
            />
            {err  && (
              <p className=" text-[12px] text-start mt-[10px] text-rose-500">
                Please Check Your Email
              </p>
            )}
          </div>
          <button className=" rounded-[5px] h-[40px] md:h-[44px] bg-blue-600 hover:bg-blue-400 text-white font-bold lg:w-[30%]">
            {" "}
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
