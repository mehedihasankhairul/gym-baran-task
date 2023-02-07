import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import dailyWorkOut from "../assets/images/dailyWorkOut.png";
import manIcon from "../assets/images/manIcon.png";
import pinkIcon from "../assets/images/pinkIcon.png";
import gallery from "../assets/images/gallery.png";

const DailyWorkOut = () => {
  return (
    <div className="lg:w-[1241px] mx-auto  grid lg:grid-cols-2 my-[120px]">
      <div className="lg:ml-10 px-10 lg:px-0">
        <h1 className="sporting-bold mb-[30px] text-[28px] leading-10  lg:text-[46px] lg:leading-[73px] text-[#262524] lg:font-normal font-bold">
          Daily morning workout in home
        </h1>
        <p className="lg:w-[553px] mb-[50px] font-base text-[#262524] leading-7 opacity-50">
          Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular
          exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or
          with your friends at home.
        </p>
        <button className="flex items-center w-[176px] lg:w-[246px] rounded-[10px] bg-[#264373] px-6 py-[14px] text-[12px] lg:text-base text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#8382EB] duration-[400ms,700ms] transition-[color,box-shadow]">
          Get started <FaArrowRight className="ml-auto text-2xl"></FaArrowRight>
        </button>
      </div>
      <div className="relative lg:ml-20 ml-[-22px] mt-[60px] lg:mt-0 lg:mb-0">
        <Image src={dailyWorkOut} width={520} height={504} alt="gym"></Image>
        <Image
          src={manIcon}
          width={60}
          height={60}
          className="absolute top-12 left-16 hidden lg:block"
          alt="gym"
        ></Image>
        <Image
          src={pinkIcon}
          width={60}
          height={60}
          className="absolute top-44 left-16 hidden lg:block"
          alt="gym"
        ></Image>
        <Image
          src={gallery}
          width={80}
          height={80}
          className="absolute top-[110px] right-36 lg:top-44 lg:left-[220px] w-[50px] md:w-[60px]"
          alt="gym"
        ></Image>
      </div>
    </div>
  );
};

export default DailyWorkOut;
