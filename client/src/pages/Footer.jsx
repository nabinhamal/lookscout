import React from "react";
import ProductsCard from "../components/Footer/PCard";
import ResourcesCard from "../components/Footer/Rcard";
import WhyChooseUsCard from "../components/Footer/WCard";
import CompanyCard from './../components/Footer/CCard';
import AboutUsCard from "../components/Footer/ACard";
import FooterLogo from "../components/Footer/LCard";

const Footer = () => {
  return (
    <section className="h-screen w-auto mt-52 px-20 lg:px-80">
      <div className="mt-10 lg:mt-0 text-center lg:text-start">
        {/* Wrapper div for logo and About Us card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex gap-12 md:gap-14">
          {/* Logo */}
          <FooterLogo />
          {/* Products Card */}
          <ProductsCard />
          {/* Resources Card */}
          <ResourcesCard />
          {/* Why Choose Us Card */}
          <WhyChooseUsCard />
          {/* Company Card */}
          <CompanyCard />
          {/* About Us Card */}
          <AboutUsCard className=" lg:text-white" />
        </div>
      </div>
      {/* Circular image */}
      <div className="lg:px-[150px] sm:-px-[50px] md:px-[300px]">
        <img src="cir.png" alt="cir" className="w-[42px] h-[42px] sm:ml-64 md:mr-60  mt-10 lg:mt-44" />
      </div>
      {/* Copyright text */}
      <div className="md:flex ">

      <div className="items-center justify-center lg:px-[300px] lg:flex-nowrap flex mt-4">&copy; 2023 Lookscout. All Rights Reserved.</div>
      <div className="lg:hidden sm:hidden   md:flex md:mt-4 md:gap-8 md:ml-[600px]  w-[24px] h-[24px] ml-[150px] lg:-ml-[10px] gap-10 -mt-3 mx-auto md:mx-0">
        <img src="/f.png" alt="Image 1" />
        <img src="/go.png" alt="Image 2" />
        <img src="/app.png" alt="Image 3" />
        <img src="/i.png" alt="Image 4" />
      </div>
      </div>
    </section>
  );
};

export default Footer;
