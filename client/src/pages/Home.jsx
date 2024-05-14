import React from "react";

const Home = () => {
  return (
    <section className="h-screen w-screen  bg-[#EAEBF0]">
      <div className="flex flex-col justify-center text-center items-center h-screen">
        <h2 className="text-blue-700 text-2xl md:text-3xl lg:text-4xl font-medium uppercase">1% Of the industry</h2>
        <h1 className="md:text-5xl lg:text-6xl text-4xl text-black font-bold mt-4">
          Hype got you here.
        </h1>
        <h2 className="md:text-5xl lg:text-6xl text-4xl  text-black font-bold">
          Stay for the support.
        </h2>
        <div className="text-xl mt-5 text-gray-500">
          <h3 className="md:text-lg lg:text-xl">We've been told it is possible to revolutionize the payment industry. We</h3>
          <h4 className="md:text-lg lg:text-xl">have not reinvented the wheel. We decided to build upon it - successfully.</h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
