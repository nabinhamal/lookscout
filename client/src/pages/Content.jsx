import React from "react";

const Content = () => {
  return (
    <section className="h-screen w-screen md:mt-12 mt-44 bg-[#2B63D9]">
      <div className="flex flex-col justify-center text-center items-center py-10 lg:py-24">
        <h2 className="text-white mt-12 lg:mt-16 md:mt-24 text-2xl lg:text-4xl font-medium uppercase">1% Of The Industry</h2>
        <h1 className="mt-12 md:text-5xl text-2xl lg:text-2xl px-6 lg:px-12 text-white font-bold">
          Welcome to your new digital reality that will rock your world truly at all.
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 mt-2">
          <button className="bg-white flex items-center font-bold lg:text-xl text-sm text-blue-500 rounded-md py-4 px-32 lg:px-16">
            Sign Up
          </button>
          <button className="bg-[#437EF7] flex font-bold items-center lg:text-xl text-sm text-white rounded-md py-5 px-32  lg:px-16">
            Log In
          </button>
        </div>
        <div className="flex gap-6 lg:mt-12 mt-4 md:mt-20 flex-col lg:flex-row md:flex-row">
          <img src="/t.png" alt="Twilio" className="w-32 md:w-[128px] h-8 md:h-[32px]" />
          <img src="/s.png" alt="Slack" className="w-32 md:w-[128px] h-8 md:h-[32px]" />
          <img src="/g.png" alt="Google" className="w-32 md:w-[128px] h-8 md:h-[32px]" />
          <img src="/p.png" alt="PayPal" className="w-32 md:w-[120px] h-8 md:h-[28px]" />
        </div>
        <div className="flex gap-6 mt-6 md:mt-12 flex-col lg:flex-row md:flex-row">
          <img src="/pin.png" alt="Pinterest" className="w-32 md:w-[128px] h-8 md:h-[32px]" />
          <img src="/m.png" alt="Teachable" className="w-32 md:w-[128px] h-10 md:h-[40px]" />
        </div>
      </div>
    </section>
  );
};

export default Content;