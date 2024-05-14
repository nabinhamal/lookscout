import React from "react";
import ProductsCard from "../components/Footer/PCard";
import ResourcesCard from "../components/Footer/Rcard";
import WhyChooseUsCard from "../components/Footer/WCard";
import CompanyCard from './../components/Footer/CCard';
import AboutUsCard from "../components/Footer/ACard";
import FooterLogo from "../components/Footer/LCard";

const Footer = () => {
  return (
    <section className="h-screen w-screen lg:mt-32 mt-32 px-8 lg:px-16">
      <div className="text-center lg:text-left">
        {/* Wrapper div for logo and About Us card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:flex gap-6 md:gap-8">
          {/* Logo */}
          <FooterLogo className="mb-8 md:mb-0" />
          {/* Products Card */}
          <ProductsCard className="mb-8 md:mb-0" />
          {/* Resources Card */}
          <ResourcesCard className="mb-8 md:mb-0" />
          {/* Why Choose Us Card */}
          <WhyChooseUsCard className="mb-8 md:mb-0" />
          {/* Company Card */}
          <CompanyCard className="mb-8 md:mb-0" />
          {/* About Us Card */}
          <AboutUsCard className="lg:text-white mb-8 md:mb-0 lg:block " />
        </div>
      </div>
      {/* Circular image */}
      <div className="flex justify-center mt-8 lg:mt-20">
        <img src="cir.png" alt="cir" className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10" />
      </div>
      {/* Copyright text */}
      <div className="text-center lg:text-left mt-4 lg:flex lg:justify-between">
        <div>&copy; 2023 Lookscout. All Rights Reserved.</div>
        <div className="hidden lg:flex lg:space-x-6">
          <img src="/f.png" alt="Image 1" className="w-6 h-6" />
          <img src="/go.png" alt="Image 2" className="w-6 h-6" />
          <img src="/app.png" alt="Image 3" className="w-6 h-6" />
          <img src="/i.png" alt="Image 4" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
