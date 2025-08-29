import React from 'react'

function Card() {
  return (
    <div className="flex flex-row justify-center gap-6 mt-6">
      {/* Card 1 */}
      <div className="bg-stone-900 p-6 rounded-xl shadow-lg w-64 text-center hover:bg-stone-800 transition">
        <div className="flex justify-center mb-4">
          <span className="text-blue-400 text-2xl">⏱️</span>
        </div>
        <h3 className="text-white text-lg font-semibold">Time Optimization</h3>
        <p className="text-gray-400 text-sm mt-2">
          Intelligent scheduling based on your available time slots
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-stone-900 p-6 rounded-xl shadow-lg w-64 text-center hover:bg-stone-800 transition">
        <div className="flex justify-center mb-4">
          <span className="text-blue-400 text-2xl">⭐</span>
        </div>
        <h3 className="text-white text-lg font-semibold">Priority-Based</h3>
        <p className="text-gray-400 text-sm mt-2">
          Tasks organized by importance and urgency levels
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-stone-900 p-6 rounded-xl shadow-lg w-64 text-center hover:bg-stone-800 transition">
        <div className="flex justify-center mb-4">
          <span className="text-blue-400 text-2xl">📅</span>
        </div>
        <h3 className="text-white text-lg font-semibold">Export Ready</h3>
        <p className="text-gray-400 text-sm mt-2">
          Download your schedule as PDF for easy reference
        </p>
      </div>
    </div>
  );
}


export default Card