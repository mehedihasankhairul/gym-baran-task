import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import CaretCircleRight from "../assets/images/CaretCircleRight.png";
import PlayCircle from "../assets/images/PlayCircle.png";
import brandslogo from "../assets/images/brandslogo.png";
import GroupHero from "../assets/images/GroupHero.png";

const HeroSection = () => {
  return (
    <div className="bg-[url('/bgone.png')]  relative">
      <Navbar />
      {/* Hero Section Start Here */}
      <div className="flex flex-col md:flex-row md:mt-[85px] md:h-[590px] px-5 md:px-0">
        <div className=" lg:w-1/2 lg:ml-10 mt-16">
          <h1 className="sporting-bold font-bold leading-10 lg:leading-[73px] text-[28px] lg:text-[56px] text-[#232322]">
            Healthy in side
            <br /> <span className="text-[#8382EB]">fresh</span> out side
          </h1>
          <p className="leading-7 lg:text-base text-[12px] my-6 text-[#262524] opacity-60">
            Exercise is a very important need for our body. Health and
            <br /> fitness will be obtained if you can do regular exercise and
            <br /> run a healthy routine.
          </p>
          <div className="flex mb-[50px]">
            <div className="flex items-center justify-between w-[176px] lg:w-[246px] bg-[#264373] text-white px-4 lg:px-6 py-3 rounded-[10px] mr-[22px] lg:mr-9 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#8382EB] duration-[400ms,700ms] transition-[color,box-shadow]">
              <button className="lg:text-base text-[12px]  ">Get started</button>
              <Image src={CaretCircleRight} width={32} height={32} alt="gym"></Image>
            </div>
            <div className="flex items-center justify-center gap-2 w-[125px] lg:w-[174px] rounded-[10px] px-3 lg:px-[18px] py-3 bg-white drop-shadow-2xl  hover:shadow-lg  duration-[400ms,700ms]">
              <Image src={PlayCircle} width={26} height={26} alt="gym"></Image>
              <button className="lg:text-base text-[12px]">Learn more</button>
            </div>
          </div>
          <p className="font-medium">Brands:</p>
          <Image src={brandslogo} width={462} height={64} alt="gym"></Image>
        </div>
        <div className="flex justify-center lg:w-1/2 mt-[60px] lg:mt-0">
          <Image src={GroupHero} alt="gym"></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
