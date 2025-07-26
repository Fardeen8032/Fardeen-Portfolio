import React from "react";
import moment from "moment";
import greetingTime from "greeting-time";
import { Calendar } from "iconsax-react";

const Greetings = () => {

  return (
    <div className="my-2 px-2 dashboard-heading">
      <div className="w[10px]  flex flex-row items-center gap-1">
        <Calendar size="28" color="#8833FF" className="w-[23px] h-[23px] sm: w-[25px] sm: h-[25px] md:w-[24px] md:h-[24px] lg:w-[27px] lg:h-[27px]" />
        <h4 className="ml-1 mb-0 text-base-gray font-semibold pt-2   text-[19px] md:text-[22px]  sm:text-[25px]  base-font-pop">
          {moment().format("dddd , DD MMMM YYYY")}
        </h4>
      </div>
      <h1 className="mb-0 text-black base-font-inter font-bold pt-2 capitalize text-[26px]  md:text-[40px]  sm:text-[34px] ">
        {greetingTime(new Date())},
        <span className="text-base-color base-font-Dancing fw-normal capitalize text-[26px] md:text-[40px] sm:text-[34px]  ">
          Fardeen Nulwala
        </span>
      </h1>
    </div>
  );
};

export default Greetings;
