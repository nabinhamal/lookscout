import React from "react";

const FooterLogo = () => {
  return (
    <div className="flex flex-col text-start lg:flex-col md:flex-col gap-6 md:gap-10 md:text-start lg:text-start">
      {/* Logo */}
      <img src="/logo1.png" alt="Logo" className="w-[160px] h-[40px]  md:-ml-[10px] mx-auto md:mx-0" />
      {/* Description */}
      <p className="text-gray-500 sm:ml-[160px] -mt-7 sm:w-64 lg:w-64 md:w-64 mx-auto md:mx-0">
        Generate outside the box thinking with the possibility to target the low.
      </p>
      {/* Images */}
      <div className="block md:hidden lg:flex sm:flex sm:ml-[156px]   w-[24px] h-[24px]  lg:-ml-[10px] gap-10 -mt-4 mx-auto md:mx-0">
        <img src="/f.png" alt="Image 1" />
        <img src="/go.png" alt="Image 2" />
        <img src="/app.png" alt="Image 3" />
        <img src="/i.png" alt="Image 4" />
      </div>
    </div>
  );
};

export default FooterLogo;
