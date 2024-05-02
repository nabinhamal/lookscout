import React from "react";

const Footer = () => {
  return (
    <section className="h-auto w-auto">
      <div className="flex flex-col justify-center text-center items-center py-10 lg:py-24">
        {/* Row 1 */}
        <div className="flex   lg:gap-6 md:flex-col md:gap-12 lg:textstart">
          {/* Logo */}
          <img src="/logo1.png" alt="Logo" className="w-32 h-auto " />
          {/* Description */}
          <p className="text-gray-400 mt-4 lg:w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {/* Images */}
          <div className="flex gap-6 mt-6 md:mt-12">
            <img src="/image1.png" alt="Image 1" className="w-32 h-auto" />
            <img src="/image2.png" alt="Image 2" className="w-32 h-auto" />
            <img src="/image3.png" alt="Image 3" className="w-32 h-auto" />
            <img src="/image4.png" alt="Image 4" className="w-32 h-auto" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-12 lg:flex lg:flex-row lg:gap-12 md:flex-col md:gap-8">
          {/* Products */}
          <div className="lg:w-1/5 md:w-full">
            <h1 className="text-white text-lg font-semibold">Products</h1>
            <ul className="text-white">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise Solutions</li>
            </ul>
          </div>
          {/* Resources */}
          <div className="lg:w-1/5 md:w-full">
            <h1 className="text-white text-lg font-semibold">Resources</h1>
            <ul className="text-white">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* Why choose us */}
          <div className="lg:w-1/5 md:w-full">
            <h1 className="text-white text-lg font-semibold">Why Choose Us</h1>
            <ul className="text-white">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          {/* About us */}
          <div className="lg:w-1/5 md:w-full">
            <h1 className="text-white text-lg font-semibold">About Us</h1>
            <ul className="text-white">
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;;
