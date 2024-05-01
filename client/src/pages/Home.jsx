import React from "react";

import Button from "../components/Button";
import Navbar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <section
      className="h-screen w-screen md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-black text-2xl font-medium ">Fashion Tips</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          Items every woman should have
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Home;