import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    getInTouch: '',
    message: '',
    agreePrivacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (

    <form onSubmit={handleSubmit} className="bg-[#151B28] w-auto h-auto mx-auto">
      <h1 className="text-2xl text-center text-white font-bold mb-4">Contact Us</h1>
      <p className="text-white flex mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      <div className="mb-6  flex flex-col lg:flex-row">
        <label htmlFor="firstName" className="block mb-1">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
     
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block mb-1">Phone</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div className="mb-6">
        <label htmlFor="getInTouch" className="block mb-1">Get in Touch With</label>
        <select id="getInTouch" name="getInTouch" value={formData.getInTouch} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
          <option value="">DropDown <IoIosArrowDown/></option>
          <option value="client">Client</option>
          <option value="customer">Customer</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
      </div>
      <div className="mb-6">
        <label htmlFor="agreePrivacyPolicy" className="flex items-center mb-2">
          <input type="checkbox" id="agreePrivacyPolicy" name="agreePrivacyPolicy" checked={formData.agreePrivacyPolicy} onChange={handleChange} className="mr-2" />
          I agree with Lookscout Privacy Policy
        </label>
      </div>
      <div className="mb-6">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
