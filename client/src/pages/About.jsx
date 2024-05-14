import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import data from '../utils/data';

const About = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('lg');
      } else if (window.innerWidth >= 640) {
        setScreenSize('md');
      } else {
        setScreenSize('sm');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCards = () => {
    return data.map(card => (
      <Card
        key={card.id}
        imageUrl={card.imageUrl}
        title={card.title}
        description={card.description}
        showButton={screenSize !== 'sm' && card.id % 2 === 0}
      />
    ));
  };

  return (
    <section className="h-auto max-w-[1240px] mt-10 py-24 bg-white border-b border-gray-400">
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
