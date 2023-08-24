import React from "react";
import { useButtonContext, useEmailcontext, useErrContext,  } from "../../DataProvider";



const ContentB = () => {
  
  const email = useEmailcontext();
  const button = useButtonContext();
  const err = useErrContext();
  


  
  return (
    <section className=" flex  flex-col lg:flex-row md:justify-center md:items-center text-center  lg:text-start  bg-desaturatedBlue  p-[40px] md:px-[100px] 2xl:px-[150px] md:pt-[100px] md:pb-[60px] gap-5 md:gap-[100px] ">
      <div className="text-white">
        <h1 className="font-bold md:text-[35px]">Get early access today</h1>
        <p className="my-[20px] text-[16px] lg:w-[500px] ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>

      <form
       id="form2"
        onSubmit={button}
        className="flex flex-col w-[90%] lg:w-[500px] gap-3 md:gap-[0px] lg:me-[0px] mx-auto  md:mt-[10px]"
      >
        <input
          onChange={email}
          className={`
            ${err ? "border-rose-500 border-2" : " border-2 "}
            text-[12px] border ps-[10px] rounded-[5px] h-[40px] md:h-[50px] lg:mb-[10px]`}
          type="text"
          placeholder="email@example.com"
        />
        {err == true && (
          <p className=" text-[12px] text-start lg:my-[0px] text-rose-500">
            Please Check Your Email
          </p>
        )}
        <button className=" text-white md:w-[40%]  rounded-[5px] h-[40px] md:h-[50px] bg-blue-600  hover:bg-blue-400 text-[12px] font-bold lg:mt-[10px]">
          {" "}
          Get Started for free
        </button>
      </form>
    </section>
  );
};

export default ContentB;
