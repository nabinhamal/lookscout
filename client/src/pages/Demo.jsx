import React from "react";
import Button from "../components/Button";

const Demo = () => {
  return (
    <div className="w-auto h-auto flex flex-col lg:flex-row justify-center items-center border-b border-gray-500">
      {/* Left div */}
      <div className="lg:w-1/2 px-4 lg:px-10 flex justify-center items-center z-10">
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
      <div className="w-full lg:w-1/2 px-4 flex relative justify-center items-center z-0">
        <div className="bg-white w-full lg:w-2/3 md:w-3/4 h-auto px-6 md:px-10 lg:px-16 py-10 rounded-lg absolute lg:bottom-10 bottom-20 md:bottom-0 transform -translate-x-1/2 left-1/2">
          {/* Card content */}
          <h2 className="text-2xl text-center font-bold mb-4">Check Us Out</h2>
          <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-sm p-3 mb-4"></div>
          <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-sm p-3 mb-4"></div>
          <Button className="mx-auto mt-4 md:mt-0">Get Started Now</Button>
        </div>
        <div className="hidden lg:block bg-white rounded-lg overflow-hidden lg:w-1/2 lg:h-[560px]">
          <img src="/bg.png" alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
