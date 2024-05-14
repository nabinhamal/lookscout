import React from "react";
import TeamCard from "../components/TeamCard";

const Team = () => {
  // Define an array of team members with their details
  const teamMembers = [
    {
      imageUrl: "/image1.png",
      title: "Morgan Drew",
      description: "Manager",
      icons: true,
    },
    {
      imageUrl: "/image2.png",
      title: "Jeffery Walker",
      description:"Lead Designer",
      icons: true,
    },
    {
      imageUrl: "/image3.png",
      title: "Andrew Steve",
      description: "Ui/UX Designer",
      icons: true,
    },
  ];

  return (
    <section className="h-screen w-screen    mt-[800px]  md:mt-[2px] flex flex-col  justify-center items-center ">
      <div className="text-center mb-8">
        <h2 className="text-black md:text-2xl text-xl lg:text-3xl mt-10 font-semibold">
          The Core of Our Team
        </h2>
        <h1 className="md:text-md mt-4 text-xl lg:text-xl text-gray-500 px-20">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </h1>
      </div>
      {/* Team Members */}
      <div className="flex lg:flex-row flex-col md:flex-row   text-start md:mt-[-100px] md:px-2  px-12">
        {/* Map over the team members array and render TeamCard for each member */}
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
