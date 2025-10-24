import React from 'react'

function Card({ sign, heading, subheading }) {
  return (
    <div className="bg-black p-6 rounded-xl shadow-lg w-62 text-center cursor-pointer hover:bg-stone-800 transition">
      <div className="flex justify-center mb-4">
        <span className="text-white text-2xl">{sign}</span>
      </div>
      <h3 className="text-white text-lg font-semibold">{heading}</h3>
      <p className="text-white text-sm mt-2">
        {subheading}
      </p>
    </div>


  );
}


export default Card