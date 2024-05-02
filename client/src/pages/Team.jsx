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
    <section className="h-auto w-auto border-b border-gray-500 flex flex-col justify-center items-center">
      <div className="text-center mb-10">
        <h2 className="text-black text-2xl mt-10 font-semibold">
          The Core of Our Team
        </h2>
        <h1 className="md:text-xl mt-4 text-xl lg:text-3xl text-gray-500 px-20">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </h1>
      </div>
      {/* Team Members */}
      <div className="flex flex-wrap sm:items-start">
        {/* Map over the team members array and render TeamCard for each member */}
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
