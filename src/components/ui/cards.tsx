import React from 'react';

const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-teal-500 p-4 rounded-lg shadow-md hover:bg-white-200 transition-all cursor-pointer text-white bg-opacity-50" style={{ height: '200px' }}>
    <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>
    <p className="text-sm text-white">{description}</p>
  </div>
  );
};

export default Card;
