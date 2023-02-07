import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BestBodyImage from "../assets/images/BestBodyImage.png";

const BestFullBody = () => {
  return (
    <div className="lg:w-[1241px]  flex flex-col-reverse lg:grid lg:grid-cols-2 my-[110px]">
      <div className="mt-[60px] lg:mt-0 ml-[-32px] lg:ml-0">
        <Image src={BestBodyImage} width={570} height={496} alt="gym"></Image>
      </div>
      <div className="lg:ml-10 mt-4 px-10 lg:px-0">
        <h1 className="sporting-bold mb-[30px]  text-[28px] lg:text-[46px] lg:leading-[73px] leading-10 text-[#262524] font-bold lg:font-normal">
          Best full body workout to lose fat
        </h1>
        <p className="lg:w-[553px] mb-[50px] text-[12px] lg:text-base text-[#262524] leading-5 lg:leading-7 opacity-50">
          Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular
          exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or
          with your friends at home.
        </p>
        <button className="flex items-center w-[176px] lg:w-[246px] rounded-[10px] bg-[#264373] px-6 py-[14px] text-[12px] lg:text-base text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#8382EB] duration-[400ms,700ms] transition-[color,box-shadow]">
          Get started <FaArrowRight className="ml-auto text-[12px] lg:text-2xl"></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default BestFullBody;
