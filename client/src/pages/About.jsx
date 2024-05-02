import React from 'react';
import Card from '../components/Card';
import useScreenSize from '../utils/helper';
import data from '../utils/data';

const About = () => {
  const { width } = useScreenSize();

  
  const renderCards = () => {
   //large screen
    if (width >= 1024) {
      return data.slice(0, 3).map(card => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ));
    }
    // Medium screens
    else if (width >= 640) {
      return data.map(card => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          showButton={card.id % 2 === 0} 
        />
      ));
    }
    // Small screens
    else {
      const oddCards = [];
      const evenCards = [];
      data.forEach(card => {
        if (card.id % 2 !== 0) {
          oddCards.push(
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          );
        } else {
          evenCards.push(
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              showButton={true} 
            />
          );
        }
      });
      return [...oddCards, ...evenCards];
    }
  };

  return (
    <section className="h-auto w-screen mt-10 py-24 bg-white border-b border-gray-400 ">
      <div className="flex flex-col justify-center text-center items-center">
        <h2 className="text-black text-4xl font-bold">Messaging for all</h2>
        <h1 className="mt-4 text-xl hidden sm:block text-gray-500">
          User-generated content in real-time will have multiple touchpoints for offsharing.
        </h1>
        <div className="text-xl text-left mt-20 text-gray-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default About;
