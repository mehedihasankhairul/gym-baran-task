import Image from "next/image";
import React from "react";
import Howitworks from "../assets/images/Howitworks.png";
import gallery from "../assets/images/gallery.png";

const HowItWork = () => {
  return (
    <div className="lg:w-[1229px] px-10 lg:px-0 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
      <div className="relative mt-[60px] lg:mt-0">
        <Image
          src={Howitworks}
          width={605}
          height={444}
          className="mr-4 ml-[-10px] md:ml-[-50px] lg:ml-0"
          alt="gym"
        ></Image>
        <Image
          src={gallery}
          width={80}
          height={80}
          className="absolute lg:top-[200px] top-[120px] right-[140px] lg:left-[265px] w-[50px] lg:w-[80px]"
          alt="gym"
        ></Image>
      </div>
      <div className="text-[#262524] lg:ml-14 ">
        <h1 className="mb-8 sporting-bold text-[28px] lg:text-[46px] leading-10 lg:leading-[73px] font-bold lg:font-normal">
          How it works?
        </h1>
        <div className="font-normal lg:w-[666px] text-[18px]">
          <div className="px-9 py-8 rounded-[10px] mb-5 lg:mb-4 bg-white opacity-50 drop-shadow-2xl lg:drop-shadow-md hover:drop-shadow-2xl hover:opacity-100 transform transition duration-700">
            <p>The body becomes sick because of rarely exercise</p>
          </div>
          <div className="px-9 py-8 rounded-[10px] mb-5 lg:mb-4 bg-white opacity-50 drop-shadow-2xl lg:drop-shadow-md hover:drop-shadow-2xl hover:opacity-100 transform transition duration-700">
            <p>Don&apos;t give up in order to get a healthy and ideal body</p>
          </div>
          <div className="px-9 py-8 rounded-[10px]  lg:mb-4 bg-white opacity-50 drop-shadow-2xl lg:drop-shadow-md hover:drop-shadow-2xl hover:opacity-100 transform transition duration-700">
            <p>Become addicted to the exercise that is given</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
