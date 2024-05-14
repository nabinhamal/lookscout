import React, { useState } from 'react';
import { IoReorderThreeOutline, IoClose } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (button) => {
    setIsActive(button);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close the dropdown when opening/closing the mobile menu
    setIsResourceOpen(false);
  };

  const toggleResourceDropdown = () => {
    setIsResourceOpen(!isResourceOpen);
  };

  return (
    <nav className="bg-[#EAEBF0] border-b border-gray-400 fixed top-0 z-50 w-full  ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="lg:ml-10 md:ml-5 sm:ml-4 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8" src="logo1.png" alt="Logo" />
            </Link>
            <div className="hidden lg:block ">
              <div className="lg:ml-60 md:ml-20 flex items-baseline space-x-4">
                <Link to="/" className="text-black font-bold hover:text-emerald-900 px-3 py-2 rounded-md text-sm ">Home</Link>
                <a href="#" className="text-black hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-bold">Our Products</a>
                <div className="relative inline-block text-left">
                  <button onClick={toggleDropdown} className="text-black  px-3 py-2 rounded-md text-sm font-bold focus:outline-none">
                    Resources {isOpen ? <IoIosArrowUp className="inline-block text-gray-400 ml-1" /> : <IoIosArrowDown className="inline-block text-gray-400 ml-1" />}
                  </button>
                  {(isOpen || isMobileMenuOpen) && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-emerald-900" role="menuitem">Documentation</a>
                        <a href="#" className="block px-4 py-2 text-sm text-black font-bold hover:bg-gray-100 hover:text-emerald-900" role="menuitem">Tutorials</a>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/contact" className="text-black-300 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-bold">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4  lg:mt-4 md:mt-1 flex items-center md:ml-6">
              <button
                className={`px-3 py-2 rounded-md text-sm font-bold focus:outline-none ${isActive === 'signUp' ? 'bg-blue-500 text-white' : 'text-blue-300 hover:text-emerald-900'}`}
                onClick={() => handleButtonClick('signUp')}
              >
                Sign Up
              </button>
              <button
                className={`px-3 py-2 rounded-md text-sm font-bold focus:outline-none ${isActive === 'logIn' ? 'bg-blue-500 text-white' : 'text-blue-300 hover:text-emerald-900'}`}
                onClick={() => handleButtonClick('logIn')}
              >
                Log In
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-emerald-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <IoClose size={24} /> : <IoReorderThreeOutline size={24} />}
            </button>
          </div>
        </div>
      </div>
      {(isOpen || isMobileMenuOpen) && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-black-300  block px-3 py-2 rounded-md text-base font-bold">Home</a>
            <a href="#" className="text-black-300  block px-3 py-2 rounded-md text-base font-bold">Our Products</a>
            <div className="relative">
              <button onClick={toggleResourceDropdown} className="text-black-300 px-3 py-2 rounded-md text-md font-bold focus:outline-none">Resources {isResourceOpen ? <IoIosArrowUp className="inline-block text-gray-400 ml-1" /> : <IoIosArrowDown className="inline-block text-gray-400 ml-1" />}</button>
              {isResourceOpen && (
                <div className="origin-top-right absolute right-90 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-black font-bold" role="menuitem">Documentation</a>
                    <a href="#" className="block px-4 py-2 text-sm text-black font-bold " role="menuitem">Tutorials</a>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-black-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Contact</Link>
            <a href="#" className="text-black-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Sign Up</a>
            <a href="#" className="text-black-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Sign</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
