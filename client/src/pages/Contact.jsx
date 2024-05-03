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
      <section  className="bg-gray-900 flex items-center justify-center flex-col gap-12 my-12 h-screen">
        <div className="flex w-full items-center justify-center py-3">
          <h1 className="text-white bg-clip-text mt-12 uppercase text-xl tracking-widest" style={{ whiteSpace: "nowrap" }}>
            Get In Touch With Us
          </h1>
        </div>
        <div className="flex flex-col px-4 -mt-10 text-gray-400">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          <p className="text-center">industry's standard dummy text ever since the 1500s, </p>
        </div>
        <div className="flex flex-col bg-gray-700 rounded-lg px-24 items-center justify-start gap-4 w-[800px] lg:w-[1300px] md:w-[900px]  ">
          <div className="w-full lg:w-[1200px] md:w-[800px] px-2 mt-12 flex flex-col items-center justify-start gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 w-full">
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
                  placeholder="input"
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
                  className="px-2 py-3  rounded-md border border-[rgba(18,18,18,0.3)] bg-transparent"
                >
                  <option value="" >DropDown Menu</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="appointment">Take Apppointment</option>
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
                className="bg-blue-500 text-white lg:px-4 lg:py-2 lg:ml-0 mb-12 sm:px-44 sm:ml-16 sm:py-2 md:ml-0 md:px-8 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </section>
    </>
  );
};

export default Contact;
