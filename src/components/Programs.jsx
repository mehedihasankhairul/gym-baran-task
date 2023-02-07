import Image from "next/image";
import React from "react";
import manDoing from "../assets/images/man-doing-yoga-.png";
import yoga from "../assets/images/man-doing-yoga.png";
import stretching from "../assets/images/stretching.png";
import person from "../assets/images/person.png";
import posture from "../assets/images/yoga-posture.png";

const Programs = () => {
  return (
    <div className="my-[120px] grid justify-center px-6">
      <div className="flex justify-center items-center">
        <h1 className="sporting-bold text-[#262524] text-[28px] lg:text-[46px] leading-10 lg:leading-[72px] text-left mb-[38px] lg:mb-[50px] font-bold lg:font-normal lg:w-[558px] lg:text-center">
          Programs that can be taken
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-20 gap-6">
        <div className="flex items-center">
          <div className="mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] rounded-full drop-shadow-md">
            <Image src={manDoing} width={50} height={50} alt="gym"></Image>
          </div>
          <div className="text-base">
            <p className="font-bold mb-[10px]">Gets ABS in 2 weeks</p>
            <p className="opacity-50">
              Exercise is a very important
              <br /> need for our body.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] rounded-full drop-shadow-md">
            <Image src={yoga} width={50} height={50} alt="gym"></Image>
          </div>
          <div className="text-base">
            <p className="font-bold mb-[10px]">25 Mins full body workout</p>
            <p className="opacity-50">
              Exercise is a very important
              <br /> need for our body.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] rounded-full drop-shadow-md">
            <Image src={stretching} width={50} height={50} alt="gym"></Image>
          </div>
          <div className="text-base">
            <p className="font-bold mb-[10px]">10 Mins toned arms workout</p>
            <p className="opacity-50">
              Exercise is a very important
              <br /> need for our body.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] rounded-full drop-shadow-md">
            <Image src={yoga} width={50} height={50} alt="gym"></Image>
          </div>
          <div className="text-base">
            <p className="font-bold mb-[10px]">15 Mins full body fat burn</p>
            <p className="opacity-50">
              Exercise is a very important
              <br /> need for our body.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] rounded-full drop-shadow-md">
            <Image src={person} width={50} height={50} alt="gym"></Image>
          </div>
          <div className="text-base">
            <p className="font-bold mb-[10px]">25 Mins HIIT workout</p>
            <p className="opacity-50">
              Exercise is a very important
              <br /> need for our body.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] rounded-full drop-shadow-md">
            <Image src={posture} width={50} height={50} alt="gym"></Image>
          </div>
          <div className="text-base">
            <p className="font-bold mb-[10px]">Intense lower Abs workout</p>
            <p className="opacity-50">
              Exercise is a very important
              <br /> need for our body.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
