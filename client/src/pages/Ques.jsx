import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const Ques = () => {
  return (
    <section
      className="h-screen w-screen mt-[600px] lg:mt-[-5px] md:mt-[-2px] "
    >
     
      <div className="flex flex-col px-20 justify-center text-center items-center ">
        <h2 className="text-black lg:text-5xl text-2xl font-bold mt-10">Frequently asked questions</h2>
        <h1 className=" mt-5 px-20 lg:text-2xl text-sm text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </h1>
       

        <div className="rounded-md text-sm -mt-2  lg:mt-[-40px]  ">
        <div className="mt-20 rounded-sm w-full px-10 flex text-start ring-2 ring-gray-100">
          
          <div className="w-full gap-64 p-4 flex  items-center">
            <div className="flex-grow">
              <h1 className="text-lg font-semibold mb-2">Authentification Issues</h1>
              <h1 className="text-sm">Porttitor nec est nisi, id nunc.</h1>
            </div>
            <button className="  bg-gray-400 text-blue-700 py-2 px-4 rounded-sm">new</button>
          </div>
     </div>
     <div className="mt-0 w-full px-10 flex text-start border-b ring-2 ring-gray-100">
          
          <div className="w-full gap-64 p-4 flex items-center">
            <div className="flex-grow">
              <h1 className="text-lg font-semibold mb-2">Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</h1>

            </div>
            <button className="hidden lg:block  bg-white text-gray-500 py-2 px-4 rounded-sm">Updated last week<IoIosArrowDown className="inline-block text-gray-400 ml-5" /></button>
          </div>
     </div>
     <div className="mt-0 w-full px-10  flex text-start border-b ring-2 ring-gray-100">
          
          <div className="w-full gap-64 p-4 flex items-center">
            <div className="flex-grow">
              <h1 className="text-lg font-semibold mb-2">Cras vitae, scelerisque tortor augue.</h1>

            </div>
            <button className="hidden lg:block   bg-white text-gray-500 py-2 px-4 rounded-sm">Updated today<IoIosArrowDown className="inline-block text-gray-400 ml-5" /></button>
          </div>
     </div>
     <div className="mt-0 w-full px-10 flex text-start border-b ring-2 ring-gray-100">
          
          <div className="w-full gap-64 p-4 flex items-center">
            <div className="flex-grow">
              <h1 className="text-lg font-semibold mb-2">Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</h1>

            </div>
            <button className="hidden lg:block  bg-white text-gray-500 py-2 px-4 rounded-sm">Updated 2 days ago<IoIosArrowDown className="inline-block text-gray-400 ml-5" /></button>
          </div>
     </div>
     <div className="mt-0 w-full px-10 flex text-start border-b ring-2 ring-gray-100">
          
          <div className="w-full gap-64 p-4 flex items-center">
            <div className="flex-grow">
              <h1 className="text-lg font-semibold mb-2">Pretium ultricies donec non mollis senectus lectus libero tellus.</h1>

            </div>
            <button className="hidden lg:block  bg-white text-gray-500 py-1 px-4 rounded-sm">Updated 3 days ago<IoIosArrowDown className="inline-block text-gray-400 ml-5" /></button>
          </div>
     </div>

     <div className="mt-0 w-full px-10 flex text-start border-b ring-2 ring-gray-100">
          
          <div className="w-full gap-64 p-4 flex items-center">
            <div className="flex-grow">
              <h1 className="text-lg font-semibold mb-2">Elit massa amet aenean ultrices vitae placerat augue.</h1>

            </div>
            <button className="hidden lg:block  bg-white text-gray-500 py-1 px-4 rounded-sm">Updated 4 days ago<IoIosArrowDown className="inline-block text-gray-400 ml-5" /></button>
          </div>
     </div>

      </div>
      </div>
    </section>
  );
};

export default Ques;