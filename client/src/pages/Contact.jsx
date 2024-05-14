import React, { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";
import Navbar from "../components/NavBar/NavBar";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    email: "",
    phone: "",
    getInTouch: "",
    message: "",
    agreePrivacyPolicy: false,
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const SendMessage = async () => {
    if (!data.email || data.email.trim() === "") {
      toast.error('Email is required');
      return;
    }

    try {
      const response = await axios.post("https://lookscout-aaui.onrender.com/api/create-contact", {
        firstName: data.firstName,
        email: data.email,
        phone: data.phone,
        getInTouch: data.getInTouch,
        message: data.message,
      });
      console.log(response);
      if (response.status === 201) {
        toast.success('Message sent successfully');
        setData({
          firstName: "",
          email: "",
          phone: "",
          getInTouch: "",
          message: "",
          agreePrivacyPolicy: false,
        });
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <>
      <section className="w-screen lg:h-screen md:h-screen bg-gray-900 flex flex-col items-center justify-center gap-2 mt-[-100px]  lg:mt-16 md:mt-10 mb-12">
        <div className="flex flex-col items-center justify-center mt-48 md:m✖  md:mt-0 lg:mt-[-70px]">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl uppercase">Get In Touch With Us</h1>
        </div>
        <div className="flex flex-col text-center m-4 text-gray-400 mb-8">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          <span className="text-center">industry's standard dummy text ever since the 1500s, </span>
        </div>
        <div className="w-full md:max-w-screen-md lg:max-w-screen-lg max-w-screen-sm  bg-gray-700 rounded-lg px-4 py-8 md:pl-4 flex flex-col items-center justify-start gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 md:px-4 gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white mb-1">First Name</label>
              <input
                name="firstName"
                value={data.firstName}
                onChange={handleTextChange}
                type="text"
                placeholder="Input"
                className="text-textlight px-4 py-3 rounded-md border border-[rgba(18,18,18,0.3)] bg-transparent focus:bg-white outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-1">Email</label>
              <input
                name="email"
                value={data.email}
                onChange={handleTextChange}
                type="email"
                placeholder="Input"
                className="px-4 py-3 rounded-md border border-[rgba(18,18,18,0.3)] bg-transparent focus:bg-white outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white mb-1">Phone</label>
              <input
                name="phone"
                value={data.phone}
                onChange={handleTextChange}
                type="tel"
                placeholder="+000"
                className="text-textlight px-4 py-3 rounded-md border border-[rgba(18,18,18,0.3)] bg-transparent focus:bg-white outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="getInTouch" className="text-white mb-1">Get in Touch With</label>
              <select
                name="getInTouch"
                value={data.getInTouch}
                onChange={handleTextChange}
                className="px-2 py-3 rounded-md border border-[rgba(18,18,18,0.3)] bg-transparent"
              >
                <option value="">DropDown Menu</option>
                <option value="inquiry">Inquiry</option>
                <option value="appointment">Take Appointment</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message" className="text-white mb-1">Message</label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleTextChange}
              placeholder="Hi! We are Lookscout"
              className="w-full px-4 py-3 rounded-md border border-[rgba(18,18,18,0.3)] bg-transparent focus:bg-white outline-none"
            ></textarea>
          </div>
          <div className="w-full flex items-center">
            <input
              type="checkbox"
              id="agreePrivacyPolicy"
              name="agreePrivacyPolicy"
              checked={data.agreePrivacyPolicy}
              onChange={handleTextChange}
              className="mr-2"
            />
            <label htmlFor="agreePrivacyPolicy" className="text-white">I agree with Lookscout Privacy Policy</label>
          </div>
          <div className="w-full">
            <button
              onClick={SendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </section>
      </>
    </>
  );
};

export default Contact;
