import React from "react";
import useForm from "../hooks/useForm";

const ContentB = () => {
  const [err, handleChange, handleSubmit, newValue] = useForm();

  return (
    <section className="  bg-desaturatedBlue">
      <div className=" max-w-[1440px] mx-auto flex  flex-col lg:flex-row md:justify-center md:items-center text-center  lg:text-start   p-[40px] md:px-[100px]  md:pt-[100px] md:pb-[60px] gap-5 md:gap-[100px] ">
        <div className="text-white">
          <h1 className="font-bold md:text-[35px]">Get early access today</h1>
          <p className="my-[20px] text-[16px] lg:w-[500px] ">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[90%] lg:w-[500px] gap-3 md:gap-[0px] lg:me-[0px] mx-auto  md:mt-[10px]"
        >
          <input
            value={newValue}
            onChange={handleChange}
            className={`
            ${err ? "border-rose-500 border-2" : " border-2 "}
            text-[12px] border ps-[10px] rounded-[5px] h-[40px] md:h-[50px] lg:mb-[10px]`}
            type="text"
            placeholder="email@example.com"
          />
          {err && (
            <p className=" text-[12px] text-start lg:my-[0px] text-rose-500">
              Please Check Your Email
            </p>
          )}
          <button className=" text-white md:w-[40%]  rounded-[5px] h-[40px] md:h-[50px] bg-blue-600  hover:bg-blue-400 text-[12px] font-bold lg:mt-[10px]">
            {" "}
            Get Started for free
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContentB;
