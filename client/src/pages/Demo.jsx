import React from "react";
import Button from "../components/Button";

const Demo = () => {
  return (
    <div className="w-screen  h-screen flex flex-col mt-[1400px]  lg:-mt-[100px] md:mt-[500px] lg:flex-row md:flex-row justify-center items-center  ">
      {/* Left div */}
      <div className="lg:w-1/2 md:1/2  px-4 lg:px-10 flex justify-center items-center z-10">
        <div className="bg-white p-8 rounded-lg text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Demonstrate branding consequently think outside</h1>
          <p className="mt-5 text-gray-500">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in..</p>
          <h2 className="mt-5 text-gray-500"><span className="mr-4 text-blue-500">✔</span>Enterprise-grade security</h2>
          <h2 className="text-gray-500"><span className="mr-4 text-blue-500">✔</span>99.9% guaranteed uptime SLA</h2>
          <h2 className="text-gray-500"><span className="mr-4 text-blue-500">✔</span>Designated customer success team</h2>
          <Button className="mt-6">Start Now →</Button>
        </div>
      </div>
      {/* Right div */}
      <div className="w-full h-full lg:w-[50%] px-4 flex relative justify-center items-center ">
        <div className="bg-white w-[60%] lg:w-[50%] md:w-[60%] md:h-13/2 h-auto px-6 md:px-4 lg:px-10 lg:mb-24 md:mb-56 mb-30 py-10 rounded-lg absolute lg:bottom-10 bottom-20 md:bottom-0 transform -translate-x-1/2 left-1/2">
          {/* Card content */}
          <h2 className="text-sm lg:text-2xl text-center font-bold mb-4">Check Us Out</h2>
          <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-sm p-3 mb-4"></div>
          <div className="flex flex-col md:flex-row ml-[60px]  lg:w-full lg:ml-[-0px] bg-gray-200 rounded-sm p-3 mb-4 w-[50%]  md:w-[50%] md:ml-[40px]"></div>
          <Button className="mx-auto lg:pr-2 lg:pl-2 lg:ml-20 mt-4 lg:mb-4 mb:mt-0 md:text-sm text-sm ml-14 md:ml-2">Get Started Now</Button>
        </div>
        <div className=" bg-white rounded-lg lg:mt-24 w-[80%] h-[80%]  md:w-[100%] md:h-[50%] lg:w-[70%] lg:h-[70%]">
          <img src="/bg.png" alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Demo;