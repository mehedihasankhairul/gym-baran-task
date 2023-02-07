import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import crucifiedpose from "../assets/images/crucifiedpose.png";
import dancer from "../assets/images/dancer-balance-posture-on-one-leg.png";
import dancerMotion from "../assets/images/dancer-motion.png";

const StaticBar = () => {
  return (
    <div className="lg:w-[1360px] rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] p-7 lg:p-[85px] grid gap-10 lg:grid-cols-3 lg:justify-center my-[60px] mx-4">
      <div className="flex">
        <div className="relative">
          <div className="mr-[30px]  bg-white opacity-20  w-[100px] h-[100px] rounded-[20px] grid justify-center items-center"></div>
          <Image
            src={crucifiedpose}
            width={50}
            height={50}
            className="absolute top-[25px] right-[55px]"
            alt="gym"
          ></Image>
        </div>
        <div className="">
          <p className="text-white text-[16px] lg:text-xl  mb-4 font-bold">
            Get that 11 line
            <br /> in 30 days
          </p>
          <button className="flex items-center gap-x-5 text-white opacity-50">
            Learn more <FaArrowRight className="hover:text-black"></FaArrowRight>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="relative">
          <div className="mr-[30px] bg-white opacity-20 w-[100px] h-[100px] rounded-[20px] grid justify-center items-center"></div>
          <Image src={dancer} width={50} height={50} className="absolute top-[25px] right-[55px]" alt="gym"></Image>
        </div>
        <div className="">
          <p className="text-white text-[16px] lg:text-xl mb-4 font-bold">
            14 Days
            <br /> sherd challenge
          </p>
          <button className="flex items-center  text-white opacity-50">
            Learn more <FaArrowRight className="hover:text-black ml-[52px]"></FaArrowRight>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="relative">
          <div className="mr-[30px] bg-white opacity-20  w-[100px] h-[100px] rounded-[20px] grid justify-center items-center"></div>
          <Image src={dancerMotion} width={50} height={50} className="absolute top-[25px] right-[55px]" alt=""></Image>
        </div>
        <div className="">
          <p className="text-white text-[16px] lg:text-xl  mb-4 font-bold">
            Get flat belly
            <br /> in 30 days
          </p>
          <button className="flex items-center gap-x-5 text-white opacity-50">
            Learn more <FaArrowRight className="hover:text-black"></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaticBar;
