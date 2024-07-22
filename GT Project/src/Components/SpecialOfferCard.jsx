import React from 'react';

export default function SpecialOfferCard({ title, description, image, previous_price, current_price }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <p className="text-gray-400 line-through">Previous Price: {previous_price}</p>
      <p className="text-gray-400">Current Price: {current_price}</p>
    </div>
  );
}
